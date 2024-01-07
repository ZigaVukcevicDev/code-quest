import Book from '@data/books/models/book.interface';

export interface BooksState {
  data: Book[];
  isLoading: boolean;
  hasLoaded: boolean;
}
