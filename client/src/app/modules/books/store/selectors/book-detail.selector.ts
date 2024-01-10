import { AppState } from '@app/app.state.interface';
import BookDetail from '@app/data/books/models/book-detail.interface';
import { BookDetailState } from '@app/modules/books/store/data/models/book-detail/book-detail.state.interface';
import { MemoizedSelector, createSelector } from '@ngrx/store';

const bookDetailSelect = (state: AppState): BookDetailState => state.bookDetail;

export const selectBookDetail: MemoizedSelector<AppState, BookDetail | null> =
  createSelector(bookDetailSelect, (state: BookDetailState) => state.data);

export const selectBookDetailIsLoading: MemoizedSelector<AppState, boolean> =
  createSelector(bookDetailSelect, (state: BookDetailState) => state.isLoading);

export const selectBookDetailHasLoaded: MemoizedSelector<AppState, boolean> =
  createSelector(bookDetailSelect, (state: BookDetailState) => state.hasLoaded);
