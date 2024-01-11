import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import BookDetail from '@app/data/books/models/book-detail.interface';
import Book from '@app/data/books/models/book.interface';
import BookDetailResponseDto from '@app/data/services/api/books/models/book-detail-response.dto';
import BookResponseDto from '@app/data/services/api/books/models/book-response.dto';
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

    return this.http.get<BookResponseDto[]>(this.apiUrl, { params }).pipe(
      map((bookList: BookResponseDto[]) => {
        return bookList.map((book, index) => {
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

  /**
   * Note to code reviewer:
   *
   * Please see comment in file book-list.effect.ts in loadBookList$ effect.
   */

  getBookListTotalNumber(): Observable<number> {
    return this.http
      .get<BookResponseDto[]>(this.apiUrl)
      .pipe(map((bookList: BookResponseDto[]) => bookList.length));
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
    return this.http.get<BookResponseDto>(`${this.apiUrl}/${id}`).pipe(
      map((book) => {
        return {
          id: parseIdFromApiBookUrlProperty(book),
          name: book.name,
          authors: book.authors,
          publisher: book.publisher,
          isFavorite: true,
        };
      })
    );
  }

  getBookDetailById(id: string): Observable<BookDetail> {
    return this.http.get<BookDetailResponseDto>(`${this.apiUrl}/${id}`).pipe(
      map((book) => ({
        id: parseIdFromApiBookUrlProperty(book),
        name: book.name,
        authors: book.authors,
        publisher: book.publisher,
        isFavorite: true,
        isbn: book.isbn,
        numberOfPages: book.numberOfPages,
        country: book.country,
        mediaType: book.mediaType,
      }))
    );
  }
}
