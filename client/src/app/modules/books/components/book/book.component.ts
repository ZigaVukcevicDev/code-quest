import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import BookColumnWidthsClasses from '@app/data/books/models/book-column-classes.interface';
import Book from '@app/data/books/models/book.interface';
import { Divider } from '@app/data/shared/divider.enum';
import { UrlPath } from '@app/data/shared/url-path.enum';

@Component({
  selector: 'cq-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookComponent {
  readonly Divider: typeof Divider = Divider;
  readonly UrlPath: typeof UrlPath = UrlPath;

  @Input({ required: true }) book: Book | undefined;
  // Column classes are used for widths above small devices
  @Input({ required: true }) columnClasses: BookColumnWidthsClasses | undefined;

  /**
   * Note: To keep this component as presentational, events for creating/removing favorite are being
   * forwarded-up through this and book list component. Then pages are calling the store.
   */

  /**
   * Note to code reviewer: I am interested how could this be done better, as when having "output-drilling" it
   * gets hard to maintain components by figuring out the data flow.
   */

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
