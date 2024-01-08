import { Component, OnInit } from '@angular/core';
import { AppState } from '@app/app-state.interface';
import BookColumnClasses from '@app/data/books/models/book-column-classes.interface';
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

  books$: Observable<Book[]> = this.store.select(selectBooks);
  isLoading$: Observable<boolean> = this.store.select(selectBooksIsLoading);
  hasLoaded$: Observable<boolean> = this.store.select(selectBooksHasLoaded);

  searchTerm: string = '';
  searchTermChange$ = new Subject<string>();

  /**
   * Note:
   *
   * tailwindcss is not capable to pick up dynamic classes.
   * We must provide whole class names.
   */

  bookColumnClasses: BookColumnClasses = {
    name: 'sm:basis-[35%]',
    authors: 'sm:basis-[35%]',
    publisher: 'sm:basis-[20%]',
    favorite: 'sm:basis-[10%]',
  };

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

  searchBooksByName() {}

  clearSearch() {
    this.searchTerm = '';
    this.store.dispatch(loadBooksAction());
  }

  /**
   * Note:
   *
   * To avoid expensive operation, the default tracking algorithm can be customized
   * by supplying the trackBy option which takes a function that has two arguments:
   * index and item. If trackBy is given, Angular tracks changes by the return value
   * of the function. If it sees two elements with the same identity, it will proceed
   * to check the content of the elements and will only repaint/re-render if the content
   * is changed.
   *
   * There is also a rumor that usage of trackBy will be mandatory in next versions of Angular.
   *
   * Read more at: https://stackoverflow.com/questions/42108217/how-to-use-trackby-with-ngfor
   */

  bookTrackBy(index: number, item: Book) {
    return item.id;
  }
}
