import { Component, Input } from '@angular/core';
import { Divider } from '@app/data/enums/divider.enum';
import BookDetail from '@app/data/interfaces/book-detail.interface';

@Component({
  selector: 'zv-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss'],
})
export class BookDetailComponent {
  readonly Divider: typeof Divider = Divider;

  // TODO: remove exclamation
  @Input() bookDetail!: BookDetail;
}
