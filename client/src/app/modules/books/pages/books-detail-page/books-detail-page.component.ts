import { Component } from '@angular/core';
import { bookDetailMock } from '@app/data/books/mocks/book-detail.mock';
import BookDetail from '@app/data/books/models/book-detail.interface';

@Component({
  selector: 'zv-books-detail-page',
  templateUrl: './books-detail-page.component.html',
  styleUrls: ['./books-detail-page.component.scss'],
})
export class BooksDetailPageComponent {
  bookDetail: BookDetail = bookDetailMock;
}
