import Book from '@data/books/models/book.interface';

export interface BookListState {
  data: Book[];
  isLoading: boolean;
  hasLoaded: boolean;
}
