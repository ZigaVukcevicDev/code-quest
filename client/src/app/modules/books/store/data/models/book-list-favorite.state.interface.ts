import Book from '@data/books/models/book.interface';

export interface BookListFavoriteState {
  data: Book[];
  isLoading: boolean;
  hasLoaded: boolean;
}
