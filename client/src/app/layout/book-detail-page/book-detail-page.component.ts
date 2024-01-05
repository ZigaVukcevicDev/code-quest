import { Component } from '@angular/core';
import BookDetail from '@app/data/interfaces/book-detail.interface';

@Component({
  selector: 'zv-book-detail-page',
  templateUrl: './book-detail-page.component.html',
  styleUrls: ['./book-detail-page.component.scss'],
})
export class BookDetailPageComponent {
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
