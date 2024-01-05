import { Component, Input } from '@angular/core';
import { Divider } from '@app/data/enums/divider.enum';
import Book from '@app/data/interfaces/book.interface';

@Component({
  selector: 'zv-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
})
export class BookComponent {
  Divider: typeof Divider = Divider;

  // TODO: remove exclamation
  @Input() book!: Book;
}
