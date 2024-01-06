import { BooksActionTypes } from '@modules/books/store/data/models/books-action-types.enum';
import { createAction } from '@ngrx/store';

// Action creators

export const loadBooksAction = createAction(BooksActionTypes.LOAD_BOOKS_DATA);
export const loadBooksSuccessAction = createAction(
  BooksActionTypes.LOAD_BOOKS_SUCCESS
);
export const loadBooksErrorAction = createAction(
  BooksActionTypes.LOAD_BOOKS_ERROR
);
