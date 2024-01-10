import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  breadcrumbsMock1,
  breadcrumbsMock2,
} from '@app/data/shared/breadcrumbs/mocks/breadcrumbs.mock';
import Breadcrumbs from '@app/data/shared/breadcrumbs/models/breadcrumbs.interface';
import {
  paginationMock1,
  paginationMock2,
} from '@app/data/shared/pagination/mocks/pagination.mock';
import Pagination from '@app/data/shared/pagination/models/pagination.interface';

@Component({
  selector: 'cq-design-system-page',
  templateUrl: './design-system.page.component.html',
  styleUrls: ['./design-system.page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DesignSystemPageComponent {
  breadcrumbsExample1: Breadcrumbs = breadcrumbsMock1;
  breadcrumbsExample2: Breadcrumbs = breadcrumbsMock2;

  paginationExample1: Pagination = paginationMock1;
  paginationExample2: Pagination = paginationMock2;
}
