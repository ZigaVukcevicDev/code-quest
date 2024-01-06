import { AppState } from '@app/app-state.interface';
import Book from '@app/data/books/models/book.interface';
import { BooksState } from '@app/modules/books/store/data/models/books-state.interface';
import { MemoizedSelector, createSelector } from '@ngrx/store';

const selectBooks = (state: AppState): BooksState => state.books;

export const selectBooksData: MemoizedSelector<AppState, Book[]> =
  createSelector(selectBooks, (state: BooksState) => state.data);

export const selectBooksIsPending: MemoizedSelector<AppState, Book[]> =
  createSelector(selectBooks, (state: BooksState) => state.data);

export const selectBooksHasLoaded: MemoizedSelector<AppState, Book[]> =
  createSelector(selectBooks, (state: BooksState) => state.data);
