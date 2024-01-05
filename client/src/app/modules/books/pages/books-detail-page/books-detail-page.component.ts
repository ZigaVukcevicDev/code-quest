import { Component } from '@angular/core';
import BookDetail from '@app/data/books/models/book-detail.interface';

@Component({
  selector: 'zv-books-detail-page',
  templateUrl: './books-detail-page.component.html',
  styleUrls: ['./books-detail-page.component.scss'],
})
export class BooksDetailPageComponent {
  bookDetail: BookDetail = {
    id: 2,
    name: 'The Rogue Prince',
    authors: ['George R. R. Martin', 'Paul Davies'],
    publisher: 'Bantam Books',
    isFavorite: false,
    isbn: '978-0553103540',
    numberOfPages: 694,
    country: 'United States',
    mediaType: 'Hardcover',
  };
}
