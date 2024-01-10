import Book from '@data/books/models/book.interface';

export interface BookListState {
  data: Book[];
  total: number;
  currentPage: number;
  isLoading: boolean;
  hasLoaded: boolean;
}
