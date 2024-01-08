import { AppState } from '@app/app.state.interface';
import Book from '@app/data/books/models/book.interface';
import { BookListFavoriteState } from '@app/modules/books/store/data/models/book-list-favorite.state.interface';
import { MemoizedSelector, createSelector } from '@ngrx/store';

const bookListFavoriteSelect = (state: AppState): BookListFavoriteState =>
  state.bookListFavorite;

export const selectBookListFavorite: MemoizedSelector<AppState, Book[]> =
  createSelector(
    bookListFavoriteSelect,
    (state: BookListFavoriteState) => state.data
  );

export const selectBookListFavoriteIsLoading: MemoizedSelector<
  AppState,
  boolean
> = createSelector(
  bookListFavoriteSelect,
  (state: BookListFavoriteState) => state.isLoading
);

export const selectBookListFavoriteHasLoaded: MemoizedSelector<
  AppState,
  boolean
> = createSelector(
  bookListFavoriteSelect,
  (state: BookListFavoriteState) => state.hasLoaded
);
