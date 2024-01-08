import { AppState } from '@app/app-state.interface';
import Book from '@app/data/books/models/book.interface';
import { BookListState } from '@app/modules/books/store/data/models/book-list.state.interface';
import { MemoizedSelector, createSelector } from '@ngrx/store';

const bookListSelect = (state: AppState): BookListState => state.bookList;

export const selectBookList: MemoizedSelector<AppState, Book[]> =
  createSelector(bookListSelect, (state: BookListState) => state.data);

export const selectBookListIsLoading: MemoizedSelector<AppState, boolean> =
  createSelector(bookListSelect, (state: BookListState) => state.isLoading);

export const selectBookListHasLoaded: MemoizedSelector<AppState, boolean> =
  createSelector(bookListSelect, (state: BookListState) => state.hasLoaded);
