import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppState } from '@app/app.state.interface';
import BookDetail from '@app/data/books/models/book-detail.interface';
import { UrlPath } from '@app/data/shared/url-path.enum';
import { loadBookDetailAction } from '@app/modules/books/store/actions/book-detail.action';
import {
  selectBookDetail,
  selectBookDetailHasLoaded,
  selectBookDetailIsLoading,
} from '@app/modules/books/store/selectors/book-detail.selector';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'cq-book-detail-page',
  templateUrl: './book-detail.page.component.html',
  styleUrls: ['./book-detail.page.component.scss'],
})
export class BookDetailPageComponent implements OnInit {
  readonly UrlPath: typeof UrlPath = UrlPath;

  bookDetail$: Observable<BookDetail | null> =
    this.store.select(selectBookDetail);
  isLoading$: Observable<boolean> = this.store.select(
    selectBookDetailIsLoading
  );
  hasLoaded$: Observable<boolean> = this.store.select(
    selectBookDetailHasLoaded
  );

  constructor(
    private readonly store: Store<AppState>,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.store.dispatch(loadBookDetailAction({ payload: id }));
    }

    // this.bookDetail$.subscribe((book: BookDetail) => {
    //   this.breadcrumbs = {
    //     text: 'Books',
    //     link: {
    //       title: 'Books',
    //       href: `/${UrlPath.BOOK_LIST}`,
    //       queryParams: { page: 1 },
    //     },
    //     childText: book.name,
    //   };
    // });

    // TODO: remove
    this.store
      .select((state) => state)
      .subscribe((state) => console.log('BookDetailPageComponent', { state }));
  }
}
