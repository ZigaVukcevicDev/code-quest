import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Book from '@app/data/books/models/book.interface';
import BookFromApi from '@app/data/services/api/books/models/book-from-api.interface';
import { ApiUrl } from '@app/data/services/api/models/api-url.enum';
import perPage from '@app/data/shared/pagination';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  private apiUrl: string = `${ApiUrl.BASE}/${ApiUrl.PATH}`;

  constructor(private http: HttpClient) {}

  getBookList(): Observable<Book[]> {
    /**
     * Note to code reviewer:
     *
     * TODO: is information correct?
     * For demo purpose I am getting just first 10 records.
     */

    const newParams = new HttpParams();
    const params = { ...newParams, page: 1, pageSize: perPage };

    return this.http.get<BookFromApi[]>(this.apiUrl, { params }).pipe(
      map((bookListFromApi: BookFromApi[]) => {
        return bookListFromApi.map((book, index) => {
          /**
           * API does not specifically return an id property.
           * It returns a url property, e.g., `https://anapioficeandfire.com/api/books/3` - which
           * could be parsed, taking the last segment as the unique identifier.
           */

          const bookUrlSegments = book.url.split('/');
          const parsedId = bookUrlSegments[bookUrlSegments.length - 1];

          return {
            id: parsedId,
            name: book.name,
            authors: book.authors,
            publisher: book.publisher,
            isFavorite: index === 1 ? true : false,
          };
        });
      })
    );
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

  getBookById(id: string): Observable<Book> {
    return this.http.get<Book>(`${this.apiUrl}/${id}`);
  }
}
