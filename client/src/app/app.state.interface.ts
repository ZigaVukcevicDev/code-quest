import { BookListFavoriteState } from '@app/modules/books/store/data/models/book-list-favorite.state.interface';
import { BookListState } from '@app/modules/books/store/data/models/book-list.state.interface';

export interface AppState {
  bookList: BookListState;
  bookListFavorite: BookListFavoriteState;
}
