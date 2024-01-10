import { BookFavoriteActionTypes } from '@app/modules/books/store/data/models/book-favorite/book-favorite.action-types.enum';
import { createAction, props } from '@ngrx/store';

export const createBookFavoriteAction = createAction(
  BookFavoriteActionTypes.CREATE_BOOK_FAVORITE,
  props<{ payload: string }>()
);
export const createBookFavoriteSuccessAction = createAction(
  BookFavoriteActionTypes.CREATE_BOOK_FAVORITE_SUCCESS
);
export const removeBookFavoriteAction = createAction(
  BookFavoriteActionTypes.REMOVE_BOOK_FAVORITE,
  props<{ payload: string }>()
);
export const removeBookFavoriteSuccessAction = createAction(
  BookFavoriteActionTypes.REMOVE_BOOK_FAVORITE_SUCCESS
);
