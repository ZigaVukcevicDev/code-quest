import { Component } from '@angular/core';
import { AppState } from '@app/app-state.interface';
import Book from '@app/data/books/models/book.interface';
import Breadcrumbs from '@app/data/shared/breadcrumbs/models/breadcrumbs.interface';
import { loadBooksAction } from '@modules/books/store/actions/books.action';
import {
  selectBooks,
  selectBooksHasLoaded,
  selectBooksIsLoading,
} from '@modules/books/store/selectors/books.selector';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'cq-book-favorite-list-page',
  templateUrl: './book-favorite-list-page.component.html',
  styleUrls: ['./book-favorite-list-page.component.scss'],
})
export class BookFavoriteListPageComponent {
  breadcrumbs: Breadcrumbs = {
    text: 'Favorite books',
    link: null,
    childText: null,
  };

  favoriteBookList$: Observable<Book[]> = this.store.select(selectBooks);
  isLoading$: Observable<boolean> = this.store.select(selectBooksIsLoading);
  hasLoaded$: Observable<boolean> = this.store.select(selectBooksHasLoaded);

  constructor(private readonly store: Store<AppState>) {}

  ngOnInit() {
    this.store.dispatch(loadBooksAction());
  }
}
