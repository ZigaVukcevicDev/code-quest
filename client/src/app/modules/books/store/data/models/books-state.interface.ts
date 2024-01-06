import Book from '@data/books/models/book.interface';

export interface BooksState {
  data: Book[];
  isPending: boolean;
  hasLoaded: boolean;
}
