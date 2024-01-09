import Pagination from '@app/data/shared/pagination/models/pagination.interface';

export const paginationMock1: Pagination = {
  urlPath: '/',
  currentPage: 1,
  perPage: 3,
  total: 9,
};

export const paginationMock2: Pagination = {
  urlPath: '/',
  currentPage: 8,
  perPage: 10,
  total: 100,
};
