import { bookMock1 } from '@app/data/books/mocks/book.mock';
import {
  loadBookListFavoriteAction,
  loadBookListFavoriteErrorAction,
  loadBookListFavoriteSuccessAction,
} from '@app/modules/books/store/actions/book-list-favorite.action';
import { BookListFavoriteState } from '@app/modules/books/store/data/models/book-list-favorite.state.interface';
import { Action, ActionReducer, createReducer, on } from '@ngrx/store';

export const initialState: BookListFavoriteState = {
  data: [bookMock1],
  isLoading: false,
  hasLoaded: false,
};

export const bookListFavoriteReducer: ActionReducer<
  BookListFavoriteState,
  Action
> = createReducer(
  initialState,
  on(
    loadBookListFavoriteAction,
    (state): BookListFavoriteState => ({
      ...state,
      isLoading: true,
      hasLoaded: false,
    })
  ),
  on(
    loadBookListFavoriteSuccessAction,
    (state, { payload }): BookListFavoriteState => {
      console.log('reducer loadBookListFavoriteSuccessAction', state.data);
      return {
        ...state,
        data: payload,
        isLoading: false,
        hasLoaded: true,
      };
    }
  ),
  on(loadBookListFavoriteErrorAction, (state): BookListFavoriteState => {
    console.log('reducer loadBookListFavoriteErrorAction');
    return {
      ...state,
      data: [],
      isLoading: false,
      hasLoaded: false,
    };
  })
);
