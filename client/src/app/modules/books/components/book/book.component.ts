import { Component, Input } from '@angular/core';
import BookColumnWidthsClasses from '@app/data/books/models/book-column-classes.interface';
import Book from '@app/data/books/models/book.interface';
import { Divider } from '@app/data/shared/divider.enum';
import { UrlPath } from '@app/data/shared/url-path.enum';

@Component({
  selector: 'cq-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
})
export class BookComponent {
  readonly Divider: typeof Divider = Divider;
  readonly UrlPath: typeof UrlPath = UrlPath;

  @Input() book: Book | undefined;

  // Column classes are used for widths above small devices
  @Input() columnClasses: BookColumnWidthsClasses | undefined;

  createFavoriteBook(bookId: string) {
    console.log('adding book to favorites', bookId);
  }

  removeFavoriteBook(bookId: string) {
    console.log('removing book to favorites', bookId);
  }
}
