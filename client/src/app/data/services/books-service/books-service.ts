import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Book from '@app/data/books/models/book.interface';
import { ApiUrl } from '@data/services/api-url.enum';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  private apiUrl: string = `${ApiUrl.BASE}/${ApiUrl.PATH}`;

  constructor(private http: HttpClient) {}

  getBooks(): Observable<Book[]> {
    const apiUrlWithPageQuery = new URL(this.apiUrl);

    /**
     * Note to code reviewer:
     *
     * For demo purpose I am getting just first 10 records.
     */
    apiUrlWithPageQuery.searchParams.set('page', '1');
    apiUrlWithPageQuery.searchParams.set('pageSize', '10');

    return this.http.get<Book[]>(apiUrlWithPageQuery.toString());
  }

  getBookById(id: number): Observable<Book> {
    return this.http.get<Book>(`${this.apiUrl}/${id}`);
  }
}
