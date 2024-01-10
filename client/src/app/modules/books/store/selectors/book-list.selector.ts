import { AppState } from '@app/app.state.interface';
import { BookListState } from '@app/modules/books/store/data/models/book-list/book-list.state.interface';
import { MemoizedSelector, createSelector } from '@ngrx/store';

const bookListSelect = (state: AppState): BookListState => state.bookList;

export const selectBookListWithTotal: MemoizedSelector<
  AppState,
  { data: BookListState['data']; total: BookListState['total'] }
> = createSelector(bookListSelect, (state: BookListState) => ({
  data: state.data,
  total: state.total,
}));

export const selectBookListIsLoading: MemoizedSelector<AppState, boolean> =
  createSelector(bookListSelect, (state: BookListState) => state.isLoading);

export const selectBookListHasLoaded: MemoizedSelector<AppState, boolean> =
  createSelector(bookListSelect, (state: BookListState) => state.hasLoaded);
