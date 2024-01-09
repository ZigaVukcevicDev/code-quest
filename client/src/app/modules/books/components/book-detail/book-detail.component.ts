import { Component, Input } from '@angular/core';
import BookDetail from '@app/data/books/models/book-detail.interface';
import { Divider } from '@app/data/shared/divider.enum';

@Component({
  selector: 'cq-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss'],
})
export class BookDetailComponent {
  readonly Divider: typeof Divider = Divider;

  @Input({ required: true }) bookDetail: BookDetail | undefined;
}
