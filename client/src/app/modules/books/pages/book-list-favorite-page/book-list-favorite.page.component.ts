import { Component } from '@angular/core';
import { AppState } from '@app/app.state.interface';
import Book from '@app/data/books/models/book.interface';
import Breadcrumbs from '@app/data/shared/breadcrumbs/models/breadcrumbs.interface';
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
})
export class BookFavoriteListPageComponent {
  breadcrumbs: Breadcrumbs = {
    text: 'Favorite books',
    link: null,
    childText: null,
  };

  bookListFavorite$: Observable<Book[]> = this.store.select(
    selectBookListFavorite
  );
  isLoading$: Observable<boolean> = this.store.select(
    selectBookListFavoriteIsLoading
  );
  hasLoaded$: Observable<boolean> = this.store.select(
    selectBookListFavoriteHasLoaded
  );

  constructor(
    // TODO: remove
    private readonly store: Store<AppState>
  ) {}

  ngOnInit() {
    this.store.dispatch(loadBookListFavoriteAction());

    // TODO: remove
    this.store
      .select((state) => state)
      .subscribe((state) =>
        console.log('BookFavoriteListPageComponent', { state })
      );
  }

  onRemoveFavoriteBook(bookId: string) {
    console.log('onRemoveFavoriteBook here?');
    this.store.dispatch(removeBookFavoriteAction({ payload: bookId }));
    this.store.dispatch(removeBookFavoriteInListAction({ payload: bookId }));
  }
}
