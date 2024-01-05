import { Component, Input } from '@angular/core';
import Book from '@app/data/interfaces/book.interface';

@Component({
  selector: 'zv-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
})
export class BookComponent {
  // TODO: remove exclamation
  @Input() book!: Book;
}
