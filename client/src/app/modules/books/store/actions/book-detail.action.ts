import BookDetail from '@app/data/books/models/book-detail.interface';
import { BookDetailActionTypes } from '@app/modules/books/store/data/models/book-detail/book-detail.action-types.enum';
import { createAction, props } from '@ngrx/store';

export const loadBookDetailAction = createAction(
  BookDetailActionTypes.LOAD_BOOK_DETAIL,
  props<{ payload: string }>()
);
export const loadBookDetailSuccessAction = createAction(
  BookDetailActionTypes.LOAD_BOOK_DETAIL_SUCCESS,
  props<{ payload: BookDetail }>()
);
export const loadBookDetailErrorAction = createAction(
  BookDetailActionTypes.LOAD_BOOK_DETAIL_ERROR
);
