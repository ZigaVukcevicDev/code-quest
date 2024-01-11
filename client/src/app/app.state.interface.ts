import { BookDetailState } from '@app/modules/books/store/data/models/book-detail/book-detail.state.interface';
import { BookListAvailableForBookFavoriteState } from '@app/modules/books/store/data/models/book-list-available-for-book-favorite/book-list-available-for-book-favorite.state.interface';
import { BookListFavoriteState } from '@app/modules/books/store/data/models/book-list-favorite/book-list-favorite.state.interface';
import { BookListState } from '@app/modules/books/store/data/models/book-list/book-list.state.interface';

export interface AppState {
  bookList: BookListState;
  bookListFavorite: BookListFavoriteState;
  bookListAvailableForFavorite: BookListAvailableForBookFavoriteState;
  bookDetail: BookDetailState;
}
