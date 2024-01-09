import { Component } from '@angular/core';
import { bookDetailMock } from '@app/data/books/mocks/book-detail.mock';
import BookDetail from '@app/data/books/models/book-detail.interface';
import Breadcrumbs from '@app/data/shared/breadcrumbs/models/breadcrumbs.interface';
import { UrlPath } from '@app/data/shared/url-path.enum';

@Component({
  selector: 'cq-book-detail-page',
  templateUrl: './book-detail.page.component.html',
  styleUrls: ['./book-detail.page.component.scss'],
})
export class BookDetailPageComponent {
  breadcrumbs: Breadcrumbs = {
    text: 'Books',
    link: {
      title: 'Books',
      href: `/${UrlPath.BOOK_LIST}`,
      queryParams: { page: 1 },
    },
    childText: 'TODO',
  };
  bookDetail: BookDetail = bookDetailMock;
}
