import Book from '@data/books/models/book.interface';

export interface BookListState {
  data: Book[];
  total: number;
  isLoading: boolean;
  hasLoaded: boolean;
}
