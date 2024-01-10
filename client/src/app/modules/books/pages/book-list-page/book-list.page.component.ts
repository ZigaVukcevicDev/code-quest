import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppState } from '@app/app.state.interface';
import Book from '@app/data/books/models/book.interface';
import perPage from '@app/data/shared/pagination.config';
import { UrlPath } from '@app/data/shared/url-path.enum';
import {
  loadBookListAction,
  loadBookListByNameAction,
  updateBookAsFavoriteAction,
} from '@app/modules/books/store/actions/book-list.action';
import {
  createBookFavoriteAction,
  removeBookFavoriteAction,
} from '@modules/books/store/actions/book-favorite.action';
import {
  selectBookListHasLoaded,
  selectBookListIsLoading,
  selectBookListWithTotal,
} from '@modules/books/store/selectors/book-list.selector';
import { Store } from '@ngrx/store';
import { Observable, Subject, debounceTime, distinctUntilChanged } from 'rxjs';

@Component({
  selector: 'cq-book-list.page',
  templateUrl: './book-list.page.component.html',
  styleUrls: ['./book-list.page.component.scss'],
})
export class BookListPageComponent implements OnInit {
  searchTerm: string = '';
  searchTermChange$ = new Subject<string>();

  bookListWithTotal$: Observable<{ data: Book[]; total: number }> =
    this.store.select(selectBookListWithTotal);
  isLoading$: Observable<boolean> = this.store.select(selectBookListIsLoading);
  hasLoaded$: Observable<boolean> = this.store.select(selectBookListHasLoaded);

  readonly UrlPath: typeof UrlPath = UrlPath;
  paginationCurrentPage: number = this.getCurrentPage();
  readonly paginationPerPage: number = perPage;

  constructor(
    private readonly store: Store<AppState>,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.store.dispatch(loadBookListAction());

    this.searchTermChange$
      .pipe(debounceTime(200), distinctUntilChanged())
      .subscribe(() => {
        const actionToDispatch = this.searchTerm
          ? loadBookListByNameAction({ payload: this.searchTerm })
          : loadBookListAction();
        this.store.dispatch(actionToDispatch);
      });

    // TODO: remove
    this.store
      .select((state) => state)
      .subscribe((state) => console.log('BookListPageComponent', { state }));
  }

  getCurrentPage() {
    const queryParam = this.route.snapshot.queryParamMap.get('page');
    return queryParam ? Number(queryParam) : 1;
  }

  clearSearch() {
    this.searchTerm = '';
    this.store.dispatch(loadBookListAction());
  }

  onCreateFavoriteBook(bookId: string) {
    this.store.dispatch(updateBookAsFavoriteAction({ payload: bookId }));
    this.store.dispatch(createBookFavoriteAction({ payload: bookId }));
  }

  onRemoveFavoriteBook(bookId: string) {
    this.store.dispatch(updateBookAsFavoriteAction({ payload: bookId }));
    this.store.dispatch(removeBookFavoriteAction({ payload: bookId }));
  }
}
