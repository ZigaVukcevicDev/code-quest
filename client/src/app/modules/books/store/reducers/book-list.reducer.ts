import Book from '@app/data/books/models/book.interface';
import {
  loadBookListAction,
  loadBookListByNameAction,
  loadBookListErrorAction,
  loadBookListSuccessAction,
  updateBookAsFavoriteAction,
  updateBookAsNotFavoriteAction,
} from '@app/modules/books/store/actions/book-list.action';
import { BookListState } from '@app/modules/books/store/data/models/book-list/book-list.state.interface';
import { Action, ActionReducer, createReducer, on } from '@ngrx/store';

export const initialState: BookListState = {
  data: [],
  total: 0,
  currentPage: 1,
  isLoading: false,
  hasLoaded: false,
};

export const bookListReducer: ActionReducer<BookListState, Action> =
  createReducer(
    initialState,
    on(
      loadBookListAction,
      (state): BookListState => ({
        ...state,
        isLoading: true,
        hasLoaded: false,
      })
    ),
    on(
      loadBookListByNameAction,
      (state): BookListState => ({
        ...state,
        isLoading: true,
        hasLoaded: false,
      })
    ),
    on(
      loadBookListSuccessAction,
      (state, { payload }): BookListState => ({
        ...state,
        data: payload.data,
        total: payload.total,
        currentPage: payload.currentPage,
        isLoading: false,
        hasLoaded: true,
      })
    ),
    on(
      loadBookListErrorAction,
      (state): BookListState => ({
        ...state,
        data: [],
        total: 0,
        isLoading: false,
        hasLoaded: false,
      })
    ),
    on(updateBookAsFavoriteAction, (state, { payload }): BookListState => {
      return updateBookAndReturnState(state, payload, true);
    }),
    on(updateBookAsNotFavoriteAction, (state, { payload }): BookListState => {
      return updateBookAndReturnState(state, payload, false);
    })
  );

function updateBookAndReturnState(
  state: BookListState,
  payload: string,
  isFavorite: boolean
): BookListState {
  const updatedData = state.data.map((book: Book) => {
    if (book.id === payload) {
      return { ...book, isFavorite };
    }
    return { ...book };
  });

  return {
    ...state,
    data: updatedData,
    isLoading: false,
    hasLoaded: true,
  };
}
