import { BookListActionTypes } from '@app/modules/books/store/data/models/book-list/book-list.action-types.enum';
import { BookListState } from '@app/modules/books/store/data/models/book-list/book-list.state.interface';
import { createAction, props } from '@ngrx/store';

export const loadBookListAction = createAction(
  BookListActionTypes.LOAD_BOOK_LIST,
  props<{ payload: number }>()
);
export const loadBookListByNameAction = createAction(
  BookListActionTypes.LOAD_BOOK_LIST_BY_NAME,
  props<{ payload: string }>()
);
export const loadBookListSuccessAction = createAction(
  BookListActionTypes.LOAD_BOOK_LIST_SUCCESS,
  props<{
    payload: {
      data: BookListState['data'];
      total: BookListState['total'];
      currentPage: BookListState['currentPage'];
    };
  }>()
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
