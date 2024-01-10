import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { AppState } from '@app/app.state.interface';
import Book from '@app/data/books/models/book.interface';
import { removeBookFavoriteAction } from '@app/modules/books/store/actions/book-favorite.action';
import {
  loadBookListFavoriteAction,
  removeBookFavoriteInListAction,
} from '@app/modules/books/store/actions/book-list-favorite.action';
import {
  selectBookListFavorite,
  selectBookListFavoriteHasLoaded,
  selectBookListFavoriteIsLoading,
} from '@modules/books/store/selectors/book-list-favorite.selector';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'cq-book-favorite-list-page',
  templateUrl: './book-list-favorite.page.component.html',
  styleUrls: ['./book-list-favorite.page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookFavoriteListPageComponent implements OnInit {
  bookListFavorite$: Observable<Book[]> = this.store.select(
    selectBookListFavorite
  );
  isLoading$: Observable<boolean> = this.store.select(
    selectBookListFavoriteIsLoading
  );
  hasLoaded$: Observable<boolean> = this.store.select(
    selectBookListFavoriteHasLoaded
  );

  constructor(private readonly store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.dispatch(loadBookListFavoriteAction());
  }

  onRemoveFavoriteBook(bookId: string): void {
    this.store.dispatch(removeBookFavoriteAction({ payload: bookId }));
    this.store.dispatch(removeBookFavoriteInListAction({ payload: bookId }));
  }
}
