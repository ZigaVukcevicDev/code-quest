import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Book from '@app/data/books/models/book.interface';
import { ApiUrl } from '@app/data/services/models/api-url.enum';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  private apiUrl: string = `${ApiUrl.BASE}/${ApiUrl.PATH}`;

  constructor(private http: HttpClient) {}

  getBooks(): Observable<Book[]> {
    const apiUrlQuery = new URL(this.apiUrl);

    /**
     * Note to code reviewer:
     *
     * For demo purpose I am getting just first 10 records.
     */

    apiUrlQuery.searchParams.set('page', '1');
    apiUrlQuery.searchParams.set('pageSize', '10');

    return this.http.get<Book[]>(apiUrlQuery.toString());
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

  getBooksByName(name: string): Observable<Book[]> {
    const apiUrlQuery = new URL(this.apiUrl);
    apiUrlQuery.searchParams.set('name', name);

    return this.http.get<Book[]>(apiUrlQuery.toString());
  }

  getBookById(id: number): Observable<Book> {
    return this.http.get<Book>(`${this.apiUrl}/${id}`);
  }
}
