import {
  loadBookDetailAction,
  loadBookDetailErrorAction,
  loadBookDetailSuccessAction,
} from '@app/modules/books/store/actions/book-detail.action';
import { BookDetailState } from '@app/modules/books/store/data/models/book-detail/book-detail.state.interface';
import { Action, ActionReducer, createReducer, on } from '@ngrx/store';

export const initialState: BookDetailState = {
  data: null,
  isLoading: false,
  hasLoaded: false,
};

export const bookDetailReducer: ActionReducer<BookDetailState, Action> =
  createReducer(
    initialState,
    on(
      loadBookDetailAction,
      (state): BookDetailState => ({
        ...state,
        isLoading: true,
        hasLoaded: false,
      })
    ),
    on(
      loadBookDetailSuccessAction,
      (state, { payload }): BookDetailState => ({
        ...state,
        data: payload,
        isLoading: false,
        hasLoaded: true,
      })
    ),
    on(
      loadBookDetailErrorAction,
      (state): BookDetailState => ({
        ...state,
        data: null,
        isLoading: false,
        hasLoaded: false,
      })
    )
  );
