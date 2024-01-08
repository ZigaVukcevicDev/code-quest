import Book from '@app/data/books/models/book.interface';
import { createAction, props } from '@ngrx/store';
import { BookListFavoriteActionTypes } from '../data/models/book-list-favorite.action-types.enum';

// Action creators

export const loadBookListFavoriteAction = createAction(
  BookListFavoriteActionTypes.LOAD_BOOK_LIST_FAVORITE
);
export const loadBookListFavoriteSuccessAction = createAction(
  BookListFavoriteActionTypes.LOAD_BOOK_LIST_FAVORITE_SUCCESS,
  props<{ payload: Book[] }>()
);
export const loadBookListFavoriteErrorAction = createAction(
  BookListFavoriteActionTypes.LOAD_BOOK_LIST_FAVORITE_ERROR
);
