import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppState } from '@app/app.state.interface';
import Book from '@app/data/books/models/book.interface';
import Breadcrumbs from '@app/data/shared/breadcrumbs/models/breadcrumbs.interface';
import perPage from '@app/data/shared/pagination';
import {
  loadBookListAction,
  loadBookListByNameAction,
} from '@app/modules/books/store/actions/book-list.action';
import {
  selectBookList,
  selectBookListHasLoaded,
  selectBookListIsLoading,
} from '@modules/books/store/selectors/book-list.selector';
import { Store } from '@ngrx/store';
import { Observable, Subject, debounceTime, distinctUntilChanged } from 'rxjs';

@Component({
  selector: 'cq-book-list.page',
  templateUrl: './book-list.page.component.html',
  styleUrls: ['./book-list.page.component.scss'],
})
export class BookListPageComponent implements OnInit {
  breadcrumbs: Breadcrumbs = {
    text: 'Books',
    link: null,
    childText: null,
  };

  searchTerm: string = '';
  searchTermChange$ = new Subject<string>();

  bookList$: Observable<Book[]> = this.store.select(selectBookList);
  isLoading$: Observable<boolean> = this.store.select(selectBookListIsLoading);
  hasLoaded$: Observable<boolean> = this.store.select(selectBookListHasLoaded);

  // TODO: use real values
  currentPage: number = this.getCurrentPage();
  perPage: number = perPage;
  total: number = 12;

  constructor(
    // TODO: remove
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
}
