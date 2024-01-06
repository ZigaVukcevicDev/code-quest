import { Component } from '@angular/core';
import { bookDetailMock } from '@app/data/books/mocks/book-detail.mock';
import BookDetail from '@app/data/books/models/book-detail.interface';
import Breadcrumbs from '@app/data/shared/breadcrumbs/models/breadcrumbs.interface';
import { UrlPath } from '@app/data/shared/url-path.enum';

@Component({
  selector: 'zv-books-detail-page',
  templateUrl: './books-detail-page.component.html',
  styleUrls: ['./books-detail-page.component.scss'],
})
export class BooksDetailPageComponent {
  breadcrumbs: Breadcrumbs = {
    text: 'Books',
    link: {
      title: 'Books',
      href: `/${UrlPath.BOOKS}`,
    },
    childText: 'TODO',
  };
  bookDetail: BookDetail = bookDetailMock;
}
