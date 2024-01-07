import { BooksState } from '@app/modules/books/store/data/models/books-state.interface';
import {
  loadBooksAction,
  loadBooksErrorAction,
  loadBooksSuccessAction,
} from '@modules/books/store/actions/books.action';
import { Action, ActionReducer, createReducer, on } from '@ngrx/store';

export const initialState: BooksState = {
  data: [],
  isLoading: false,
  hasLoaded: false,
};

export const booksReducer: ActionReducer<BooksState, Action> = createReducer(
  initialState,
  on(
    loadBooksAction,
    (state): BooksState => ({
      ...state,
      isLoading: true,
      hasLoaded: false,
    })
  ),
  on(loadBooksSuccessAction, (state, { payload }): BooksState => {
    console.log('reducer loadBooksSuccessAction', state.data);
    return {
      ...state,
      data: payload,
      isLoading: false,
      hasLoaded: true,
    };
  }),
  on(loadBooksErrorAction, (state): BooksState => {
    console.log('reducer loadBooksErrorAction');
    return {
      ...state,
      data: [],
      isLoading: false,
      hasLoaded: false,
    };
  })
);
