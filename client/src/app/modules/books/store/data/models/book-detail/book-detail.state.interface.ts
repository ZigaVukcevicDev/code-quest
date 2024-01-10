import BookDetail from '@app/data/books/models/book-detail.interface';

export interface BookDetailState {
  data: BookDetail | null;
  isLoading: boolean;
  hasLoaded: boolean;
}
