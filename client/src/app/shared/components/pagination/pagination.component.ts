import { Component, Input, OnInit } from '@angular/core';
import { UrlPath } from '@app/data/shared/url-path.enum';

@Component({
  selector: 'cq-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent implements OnInit {
  @Input() currentPage: number = 1;
  @Input() perPage: number = 0;
  @Input() total: number = 0;

  readonly UrlPath: typeof UrlPath = UrlPath;
  numberOfPages: number = 0;
  pageList: number[] = [];

  ngOnInit() {
    this.numberOfPages = this.calculateNumberOfPages();
  }

  calculateNumberOfPages() {
    return this.perPage > 0 && this.total > 0
      ? Math.ceil(this.total / this.perPage)
      : 0;
  }
}
