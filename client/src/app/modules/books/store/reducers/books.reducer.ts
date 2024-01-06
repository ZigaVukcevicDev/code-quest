import { bookMock1, bookMock2 } from '@app/data/books/mocks/book.mock';
import { BooksState } from '@app/modules/books/store/data/models/books-state.interface';
import { loadBooksAction } from '@modules/books/store/actions/books.action';
import { Action, ActionReducer, createReducer, on } from '@ngrx/store';

export const initialState: BooksState = {
  data: [bookMock1, bookMock2],
  isPending: false,
  hasLoaded: false,
};

export const booksReducer: ActionReducer<BooksState, Action> = createReducer(
  initialState,
  on(loadBooksAction, (state): BooksState => ({ ...state, isPending: true }))
);
