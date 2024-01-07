import Book from '@app/data/books/models/book.interface';
import { BooksActionTypes } from '@modules/books/store/data/models/books-action-types.enum';
import { createAction, props } from '@ngrx/store';

// Action creators

export const loadBooksAction = createAction(BooksActionTypes.LOAD_BOOKS_DATA);
export const loadBooksSuccessAction = createAction(
  BooksActionTypes.LOAD_BOOKS_SUCCESS,
  props<{ payload: Book[] }>()
);
export const loadBooksErrorAction = createAction(
  BooksActionTypes.LOAD_BOOKS_ERROR
);
