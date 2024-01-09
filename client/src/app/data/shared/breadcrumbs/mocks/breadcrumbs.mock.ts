import Breadcrumbs from '@data/shared/breadcrumbs/models/breadcrumbs.interface';

export const breadcrumbsMock1: Breadcrumbs = {
  text: 'Breadcrumb text',
  link: null,
  childText: null,
};

export const breadcrumbsMock2: Breadcrumbs = {
  text: 'Breadcrumb text',
  link: {
    title: 'Breadcrumb title',
    href: '/',
    queryParams: null,
  },
  childText: 'Breadcrumb child text',
};
