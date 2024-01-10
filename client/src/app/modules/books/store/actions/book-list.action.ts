import Book from '@app/data/books/models/book.interface';
import { BookListActionTypes } from '@app/modules/books/store/data/models/book-list/book-list.action-types.enum';
import { createAction, props } from '@ngrx/store';

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
export const updateBookAsFavoriteAction = createAction(
  BookListActionTypes.UPDATE_BOOK_AS_FAVORITE,
  props<{ payload: string }>()
);
export const updateBookAsNotFavoriteAction = createAction(
  BookListActionTypes.UPDATE_BOOK_AS_NOT_FAVORITE,
  props<{ payload: string }>()
);
