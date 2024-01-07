import { AppState } from '@app/app-state.interface';
import Book from '@app/data/books/models/book.interface';
import { BooksState } from '@app/modules/books/store/data/models/books-state.interface';
import { MemoizedSelector, createSelector } from '@ngrx/store';

const booksSelect = (state: AppState): BooksState => state.books;

export const selectBooks: MemoizedSelector<AppState, Book[]> = createSelector(
  booksSelect,
  (state: BooksState) => state.data
);

export const selectBooksIsLoading: MemoizedSelector<AppState, boolean> =
  createSelector(booksSelect, (state: BooksState) => state.isLoading);

export const selectBooksHasLoaded: MemoizedSelector<AppState, boolean> =
  createSelector(booksSelect, (state: BooksState) => state.hasLoaded);
