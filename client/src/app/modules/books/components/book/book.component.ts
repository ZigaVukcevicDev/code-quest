import { Component, Input } from '@angular/core';
import { Divider } from '@app/data/enums/divider.enum';
import { UrlPath } from '@app/data/enums/url-path.enum';
import BookColumnWidths from '@app/data/interfaces/book-column-widths.interface';
import Book from '@app/data/interfaces/book.interface';

@Component({
  selector: 'zv-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
})
export class BookComponent {
  readonly Divider: typeof Divider = Divider;
  readonly UrlPath: typeof UrlPath = UrlPath;

  // TODO: remove exclamation
  @Input() book!: Book;

  // Column widths are used for widths above small devices
  // TODO: remove exclamation
  @Input() columnWidths!: BookColumnWidths;
}
