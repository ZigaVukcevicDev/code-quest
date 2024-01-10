import { BookListFavoriteActionTypes } from '@app/modules/books/store/data/models/book-list-favorite/book-list-favorite.action-types.enum';
import { BookListFavoriteState } from '@app/modules/books/store/data/models/book-list-favorite/book-list-favorite.state.interface';
import { createAction, props } from '@ngrx/store';

export const loadBookListFavoriteAction = createAction(
  BookListFavoriteActionTypes.LOAD_BOOK_LIST_FAVORITE
);
export const loadBookListFavoriteSuccessAction = createAction(
  BookListFavoriteActionTypes.LOAD_BOOK_LIST_FAVORITE_SUCCESS,
  props<{ payload: BookListFavoriteState['data'] }>()
);
export const loadBookListFavoriteErrorAction = createAction(
  BookListFavoriteActionTypes.LOAD_BOOK_LIST_FAVORITE_ERROR
);
export const createBookFavoriteInListAction = createAction(
  BookListFavoriteActionTypes.CREATE_BOOK_FAVORITE_IN_LIST,
  props<{ payload: string }>()
);
export const removeBookFavoriteInListAction = createAction(
  BookListFavoriteActionTypes.REMOVE_BOOK_FAVORITE_IN_LIST,
  props<{ payload: string }>()
);
