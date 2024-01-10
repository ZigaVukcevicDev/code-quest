import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';

@Component({
  selector: 'cq-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PaginationComponent implements OnInit {
  @Input({ required: true }) urlPath: string | undefined;
  @Input({ required: true }) currentPage = 1;
  @Input({ required: true }) perPage = 0;
  @Input({ required: true }) total = 0;

  @Output() pageChange: EventEmitter<number> = new EventEmitter<number>();

  numberOfPages = 0;
  pageList: number[] = [];

  ngOnInit(): void {
    this.numberOfPages = this.calculateNumberOfPages();
  }

  emitPageChange(page: number): void {
    this.pageChange.emit(page);
  }

  calculateNumberOfPages(): number {
    return this.perPage > 0 && this.total > 0
      ? Math.ceil(this.total / this.perPage)
      : 0;
  }
}
