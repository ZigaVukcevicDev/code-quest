import { createAction, props } from '@ngrx/store';
import { BookFavoriteActionTypes } from '../data/models/book-favorite.action-types.enum';

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
