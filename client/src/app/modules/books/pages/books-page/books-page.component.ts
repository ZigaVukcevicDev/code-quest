import { Component, OnInit } from '@angular/core';
import { AppState } from '@app/app-state.interface';
import Book from '@app/data/books/models/book.interface';
import { BooksService } from '@app/data/services/api/books/books.service';
import Breadcrumbs from '@app/data/shared/breadcrumbs/models/breadcrumbs.interface';
import {
  loadBooksAction,
  loadBooksByNameAction,
} from '@modules/books/store/actions/books.action';
import {
  selectBooks,
  selectBooksHasLoaded,
  selectBooksIsLoading,
} from '@modules/books/store/selectors/books.selector';
import { Store } from '@ngrx/store';
import { Observable, Subject, debounceTime, distinctUntilChanged } from 'rxjs';

@Component({
  selector: 'cq-books-page',
  templateUrl: './books-page.component.html',
  styleUrls: ['./books-page.component.scss'],
})
export class BooksPageComponent implements OnInit {
  breadcrumbs: Breadcrumbs = {
    text: 'Books',
    link: null,
    childText: null,
  };

  bookList$: Observable<Book[]> = this.store.select(selectBooks);
  isLoading$: Observable<boolean> = this.store.select(selectBooksIsLoading);
  hasLoaded$: Observable<boolean> = this.store.select(selectBooksHasLoaded);

  searchTerm: string = '';
  searchTermChange$ = new Subject<string>();

  constructor(
    // TODO: remove
    private readonly booksService: BooksService,
    private readonly store: Store<AppState>
  ) {}

  ngOnInit() {
    this.store.dispatch(loadBooksAction());

    this.searchTermChange$
      .pipe(debounceTime(200), distinctUntilChanged())
      .subscribe(() => {
        const actionToDispatch = this.searchTerm
          ? loadBooksByNameAction({ payload: this.searchTerm })
          : loadBooksAction();
        this.store.dispatch(actionToDispatch);
      });

    // TODO: remove
    this.store
      .select((state) => state)
      .subscribe((state) => console.log({ state }));

    // this.booksService.getBookById(1).subscribe({
    //   next: (value) => {
    //     console.log('Book with id 1');
    //     console.log(value);
    //   },
    // });
  }

  clearSearch() {
    this.searchTerm = '';
    this.store.dispatch(loadBooksAction());
  }
}
