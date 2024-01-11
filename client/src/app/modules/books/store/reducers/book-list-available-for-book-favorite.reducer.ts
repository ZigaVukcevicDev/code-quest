import {
  loadBookListAvailableForBookFavoriteAction,
  loadBookListAvailableForBookFavoriteErrorAction,
  loadBookListAvailableForBookFavoriteSuccessAction,
} from '@app/modules/books/store/actions/book-list-available-for-book-favorite.action';
import { BookListAvailableForBookFavoriteState } from '@app/modules/books/store/data/models/book-list-available-for-book-favorite/book-list-available-for-book-favorite.state.interface';
import { Action, ActionReducer, createReducer, on } from '@ngrx/store';

export const initialState: BookListAvailableForBookFavoriteState = {
  data: [],
  isLoading: false,
  hasLoaded: false,
};

export const bookListAvailableForBookFavoriteReducer: ActionReducer<
  BookListAvailableForBookFavoriteState,
  Action
> = createReducer(
  initialState,
  on(
    loadBookListAvailableForBookFavoriteAction,
    (state): BookListAvailableForBookFavoriteState => ({
      ...state,
      isLoading: true,
      hasLoaded: false,
    })
  ),
  on(
    loadBookListAvailableForBookFavoriteSuccessAction,
    (state, { payload }): BookListAvailableForBookFavoriteState => ({
      ...state,
      data: payload.data,
      isLoading: false,
      hasLoaded: true,
    })
  ),
  on(
    loadBookListAvailableForBookFavoriteErrorAction,
    (state): BookListAvailableForBookFavoriteState => ({
      ...state,
      data: [],
      isLoading: false,
      hasLoaded: false,
    })
  )
);
