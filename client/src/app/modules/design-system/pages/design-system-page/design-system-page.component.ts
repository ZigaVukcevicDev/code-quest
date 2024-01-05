import { Component } from '@angular/core';
import {
  breadcrumbsMock1,
  breadcrumbsMock2,
} from '@app/data/shared/breadcrumbs/mocks/breadcrumbs.mock';
import Breadcrumbs from '@app/data/shared/breadcrumbs/models/breadcrumbs.interface';

@Component({
  selector: 'zv-design-system-page',
  templateUrl: './design-system-page.component.html',
  styleUrls: ['./design-system-page.component.scss'],
})
export class DesignSystemPageComponent {
  breadcrumbsExample1: Breadcrumbs = breadcrumbsMock1;
  breadcrumbsExample2: Breadcrumbs = breadcrumbsMock2;
}
