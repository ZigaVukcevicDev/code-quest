import { Component, EventEmitter, Input, Output } from '@angular/core';
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

  // TODO: write note how this work
  // TODO: write fot the reviewer, is there a better practice, but still keep dumb component?

  @Output() createFavoriteBook: EventEmitter<string> =
    new EventEmitter<string>();
  @Output() removeFavoriteBook: EventEmitter<string> =
    new EventEmitter<string>();

  emitCreateFavoriteBook() {
    if (this.book) {
      this.createFavoriteBook.emit(this.book.id);
    }
  }

  emitRemoveFavoriteBook() {
    if (this.book) {
      this.removeFavoriteBook.emit(this.book.id);
    }
  }
}
