import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { AppState } from '@app/app.state.interface';
import perPage from '@app/data/shared/pagination.config';
import { UrlPath } from '@app/data/shared/url-path.enum';
import {
  loadBookListAction,
  loadBookListByNameAction,
  updateBookAsFavoriteAction,
} from '@app/modules/books/store/actions/book-list.action';
import { BookListState } from '@app/modules/books/store/data/models/book-list/book-list.state.interface';
import {
  createBookFavoriteAction,
  removeBookFavoriteAction,
} from '@modules/books/store/actions/book-favorite.action';
import {
  selectBookList,
  selectBookListHasLoaded,
  selectBookListIsLoading,
} from '@modules/books/store/selectors/book-list.selector';
import { Store } from '@ngrx/store';
import {
  Observable,
  Subject,
  debounceTime,
  distinctUntilChanged,
  takeUntil,
} from 'rxjs';

@Component({
  selector: 'cq-book-list.page',
  templateUrl: './book-list.page.component.html',
  styleUrls: ['./book-list.page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookListPageComponent implements OnInit, OnDestroy {
  readonly UrlPath: typeof UrlPath = UrlPath;

  searchTerm = '';
  searchTermChange$ = new Subject<string>();

  bookList$: Observable<Pick<BookListState, 'data' | 'total' | 'currentPage'>> =
    this.store.select(selectBookList);
  isLoading$: Observable<BookListState['isLoading']> = this.store.select(
    selectBookListIsLoading
  );
  hasLoaded$: Observable<BookListState['hasLoaded']> = this.store.select(
    selectBookListHasLoaded
  );

  readonly paginationPerPage: number = perPage;
  private currentPage = 1;
  private destroy$ = new Subject<void>();

  constructor(private readonly store: Store<AppState>) {}

  ngOnInit(): void {
    this.searchTermChange$
      .pipe(debounceTime(200), distinctUntilChanged())
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => {
        const actionToDispatch = this.searchTerm
          ? loadBookListByNameAction({ payload: this.searchTerm })
          : loadBookListAction({ payload: this.currentPage });
        this.store.dispatch(actionToDispatch);
      });

    this.store.dispatch(loadBookListAction({ payload: this.currentPage }));
  }

  onCreateFavoriteBook(bookId: string): void {
    this.store.dispatch(updateBookAsFavoriteAction({ payload: bookId }));
    this.store.dispatch(createBookFavoriteAction({ payload: bookId }));
  }

  onRemoveFavoriteBook(bookId: string): void {
    this.store.dispatch(updateBookAsFavoriteAction({ payload: bookId }));
    this.store.dispatch(removeBookFavoriteAction({ payload: bookId }));
  }

  onPageChange(page: number): void {
    this.store.dispatch(loadBookListAction({ payload: page }));

    this.bookList$.pipe(takeUntil(this.destroy$)).subscribe((bookList) => {
      this.currentPage = bookList.currentPage;
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
