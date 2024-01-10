import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Book from '@app/data/books/models/book.interface';
import BookDetailFromApi from '@app/data/services/api/books/models/book-detail-from-api.interface';
import BookFromApi from '@app/data/services/api/books/models/book-from-api.interface';
import { ApiUrl } from '@app/data/services/api/models/api-url.enum';
import perPage from '@app/data/shared/pagination.config';
import parseIdFromApiBookUrlProperty from '@app/shared/utils/parse-id-from-api-book-url-property';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  private apiUrl = `${ApiUrl.BASE}/${ApiUrl.PATH}`;

  constructor(private http: HttpClient) {}

  getBookList(page: number): Observable<Book[]> {
    const newParams = new HttpParams();
    const params = { ...newParams, page, pageSize: perPage };

    return this.http.get<BookFromApi[]>(this.apiUrl, { params }).pipe(
      map((bookListFromApi: BookFromApi[]) => {
        return bookListFromApi.map((book, index) => {
          return {
            id: parseIdFromApiBookUrlProperty(book),
            name: book.name,
            authors: book.authors,
            publisher: book.publisher,
            isFavorite: index === 1 ? true : false,
          };
        });
      })
    );
  }

  // TODO: add comment for code reviewer that this is bad
  getBookListTotal(): Observable<number> {
    return this.http
      .get<BookFromApi[]>(this.apiUrl)
      .pipe(map((bookListFromApi: BookFromApi[]) => bookListFromApi.length));
  }

  /**
   * Note:
   *
   * API doesn't support fuzzy search. Name of the book must
   * be exact (not case sensitive). Result is always provided as array.
   */

  /**
   * Note to code reviewer:
   *
   * See above comment. Result as array - perhaps this is out of the
   * reason there could be two (or more) books with same name. This
   * is why I am keeping name of method in plural.
   */

  getBookListByName(name: string): Observable<Book[]> {
    const newParams = new HttpParams();
    const params = { ...newParams, name };

    return this.http.get<Book[]>(this.apiUrl, { params });
  }

  getBookById(id: string): Observable<BookFromApi> {
    return this.http.get<BookFromApi>(`${this.apiUrl}/${id}`);
  }

  getBookDetailById(id: string): Observable<BookDetailFromApi> {
    return this.http.get<BookDetailFromApi>(`${this.apiUrl}/${id}`);
  }
}
