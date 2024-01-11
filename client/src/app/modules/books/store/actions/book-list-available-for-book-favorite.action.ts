import { BookListAvailableForBookFavoriteActionTypes } from '@app/modules/books/store/data/models/book-list-available-for-book-favorite/book-list-available-for-book-favorite.action-types.enum';
import { BookListAvailableForBookFavoriteState } from '@app/modules/books/store/data/models/book-list-available-for-book-favorite/book-list-available-for-book-favorite.state.interface';
import { createAction, props } from '@ngrx/store';

export const loadBookListAvailableForBookFavoriteAction = createAction(
  BookListAvailableForBookFavoriteActionTypes.LOAD_BOOK_LIST_AVAILABLE_FOR_BOOK_FAVORITE
);
export const loadBookListAvailableForBookFavoriteSuccessAction = createAction(
  BookListAvailableForBookFavoriteActionTypes.LOAD_BOOK_LIST_AVAILABLE_FOR_BOOK_FAVORITE_SUCCESS,
  props<{
    payload: {
      data: BookListAvailableForBookFavoriteState['data'];
    };
  }>()
);
export const loadBookListAvailableForBookFavoriteErrorAction = createAction(
  BookListAvailableForBookFavoriteActionTypes.LOAD_BOOK_LIST_AVAILABLE_FOR_BOOK_FAVORITE_ERROR
);
