import { bookMock1 } from '@app/data/books/mocks/book.mock';
import Book from '@app/data/books/models/book.interface';
import {
  loadBookListFavoriteAction,
  loadBookListFavoriteErrorAction,
  loadBookListFavoriteSuccessAction,
  removeBookFavoriteInListAction,
} from '@app/modules/books/store/actions/book-list-favorite.action';
import { BookListFavoriteState } from '@app/modules/books/store/data/models/book-list-favorite/book-list-favorite.state.interface';
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
    (state, { payload }): BookListFavoriteState => ({
      ...state,
      data: payload,
      isLoading: false,
      hasLoaded: true,
    })
  ),
  on(
    loadBookListFavoriteErrorAction,
    (state): BookListFavoriteState => ({
      ...state,
      data: [],
      isLoading: false,
      hasLoaded: false,
    })
  ),
  on(
    removeBookFavoriteInListAction,
    (state, { payload }): BookListFavoriteState => {
      const currentData: Book[] = [...state.data];
      const updatedData = currentData.filter((book) => book.id !== payload);

      return {
        ...state,
        data: updatedData,
        isLoading: false,
        hasLoaded: true,
      };
    }
  )
);
