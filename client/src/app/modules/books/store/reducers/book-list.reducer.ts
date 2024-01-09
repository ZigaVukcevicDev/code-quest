import Book from '@app/data/books/models/book.interface';
import {
  loadBookListAction,
  loadBookListByNameAction,
  loadBookListErrorAction,
  loadBookListSuccessAction,
  updateBookAsFavoriteAction,
  updateBookAsNotFavoriteAction,
} from '@app/modules/books/store/actions/book-list.action';
import { BookListState } from '@app/modules/books/store/data/models/book-list.state.interface';
import { Action, ActionReducer, createReducer, on } from '@ngrx/store';

export const initialState: BookListState = {
  data: [],
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
    on(loadBookListSuccessAction, (state, { payload }): BookListState => {
      console.log('reducer loadBookListSuccessAction', state.data);
      return {
        ...state,
        data: payload,
        isLoading: false,
        hasLoaded: true,
      };
    }),
    on(loadBookListErrorAction, (state): BookListState => {
      console.log('reducer loadBookListErrorAction');
      return {
        ...state,
        data: [],
        isLoading: false,
        hasLoaded: false,
      };
    }),
    on(updateBookAsFavoriteAction, (state, { payload }): BookListState => {
      console.log('reducer updateBookAsFavoriteAction');
      console.log('payload', payload);

      const updatedData = state.data.map((book: Book) => {
        if (book.id === payload) {
          return { ...book, isFavorite: true };
        }
        return { ...book };
      });

      console.log('updatedData', updatedData);

      return {
        ...state,
        data: updatedData,
        isLoading: false,
        hasLoaded: true,
      };
    }),
    on(updateBookAsNotFavoriteAction, (state, { payload }): BookListState => {
      console.log('reducer updateBookAsNotFavoriteAction');
      console.log('payload', payload);

      const updatedData = state.data.map((book: Book) => {
        if (book.id === payload) {
          return { ...book, isFavorite: false };
        }
        return book;
      });

      console.log('updatedData', updatedData);

      return {
        ...state,
        data: updatedData,
        isLoading: false,
        hasLoaded: true,
      };
    })
  );
