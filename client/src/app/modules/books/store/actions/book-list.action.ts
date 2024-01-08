import Book from '@app/data/books/models/book.interface';
import { BookListActionTypes } from '@app/modules/books/store/data/models/book-list-action-types.enum';
import { createAction, props } from '@ngrx/store';

// Action creators

export const loadBookListAction = createAction(
  BookListActionTypes.LOAD_BOOK_LIST
);
export const loadBookListByNameAction = createAction(
  BookListActionTypes.LOAD_BOOK_LIST_BY_NAME,
  props<{ payload: string }>()
);
export const loadBookListSuccessAction = createAction(
  BookListActionTypes.LOAD_BOOK_LIST_SUCCESS,
  props<{ payload: Book[] }>()
);
export const loadBookListErrorAction = createAction(
  BookListActionTypes.LOAD_BOOK_LIST_ERROR
);
