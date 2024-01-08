import { Component } from '@angular/core';
import { AppState } from '@app/app.state.interface';
import Book from '@app/data/books/models/book.interface';
import Breadcrumbs from '@app/data/shared/breadcrumbs/models/breadcrumbs.interface';
import { loadBookListAction } from '@app/modules/books/store/actions/book-list.action';
import {
  selectBookList,
  selectBookListHasLoaded,
  selectBookListIsLoading,
} from '@modules/books/store/selectors/book-list.selector';
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

  favoriteBookList$: Observable<Book[]> = this.store.select(selectBookList);
  isLoading$: Observable<boolean> = this.store.select(selectBookListIsLoading);
  hasLoaded$: Observable<boolean> = this.store.select(selectBookListHasLoaded);

  constructor(private readonly store: Store<AppState>) {}

  ngOnInit() {
    this.store.dispatch(loadBookListAction());
  }
}
