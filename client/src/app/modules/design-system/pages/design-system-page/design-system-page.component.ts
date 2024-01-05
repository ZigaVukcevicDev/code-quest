import { Component } from '@angular/core';
import Breadcrumbs from '@app/data/shared/breadcrumbs/models/breadcrumbs.interface';

@Component({
  selector: 'zv-design-system-page',
  templateUrl: './design-system-page.component.html',
  styleUrls: ['./design-system-page.component.scss'],
})
export class DesignSystemPageComponent {
  breadcrumbsExample1: Breadcrumbs = {
    text: 'Breadcrumb text',
    link: null,
    childText: null,
  };

  breadcrumbsExample2: Breadcrumbs = {
    text: 'Breadcrumb text',
    link: {
      title: 'Breadcrumb title',
      href: '/',
    },
    childText: 'Breadcrumb child text',
  };
}
