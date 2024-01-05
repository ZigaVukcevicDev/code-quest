import { Component, Input } from '@angular/core';
import BookColumnWidths from '@app/data/books/models/book-column-widths.interface';
import Book from '@app/data/books/models/book.interface';
import { Divider } from '@app/data/shared/divider.enum';
import { UrlPath } from '@app/data/shared/url-path.enum';

@Component({
  selector: 'zv-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
})
export class BookComponent {
  readonly Divider: typeof Divider = Divider;
  readonly UrlPath: typeof UrlPath = UrlPath;

  @Input() book: Book | undefined;

  // Column widths are used for widths above small devices
  @Input() columnWidths: BookColumnWidths | undefined;
}
