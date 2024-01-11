import Book from '@data/books/models/book.interface';

export interface BookListAvailableForBookFavoriteState {
  data: Book[];
  isLoading: boolean;
  hasLoaded: boolean;
}
