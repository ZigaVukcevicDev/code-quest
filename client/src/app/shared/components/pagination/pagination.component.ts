import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'cq-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent implements OnInit {
  @Input({ required: true }) urlPath: string = '';
  @Input({ required: true }) currentPage: number = 1;
  @Input({ required: true }) perPage: number = 0;
  @Input({ required: true }) total: number = 0;

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
