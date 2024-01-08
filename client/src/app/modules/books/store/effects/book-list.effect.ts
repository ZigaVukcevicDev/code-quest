import { Injectable } from '@angular/core';
import { BooksService } from '@app/data/services/api/books/books.service';
import {
  loadBookListAction,
  loadBookListByNameAction,
  loadBookListErrorAction,
  loadBookListSuccessAction,
} from '@app/modules/books/store/actions/book-list.action';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, exhaustMap, map } from 'rxjs/operators';

// Note to code reviewer: Instead of class, it could be also written as functional effect
@Injectable()
export class BookListEffects {
  loadBookList$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadBookListAction),
      // exhaustMap waits for the inner observable to finish
      exhaustMap(() =>
        this.booksService.getBookList().pipe(
          map((bookList) => {
            console.log('effect loadBookList$ success', bookList);
            return loadBookListSuccessAction({ payload: bookList });
          }),
          catchError((error) => {
            console.log('effect loadBookList$ error', error);
            return of(loadBookListErrorAction());
          })
        )
      )
    )
  );

  loadBookListByName$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadBookListByNameAction),
      map((action) => action.payload),
      exhaustMap((searchTerm) =>
        this.booksService.getBookListByName(searchTerm).pipe(
          map((bookList) => {
            console.log('effect loadBookListByName$ success', bookList);
            return loadBookListSuccessAction({ payload: bookList });
          }),
          catchError((error) => {
            console.log('effect loadBookListByName$ error', error);
            return of(loadBookListErrorAction());
          })
        )
      )
    )
  );

  constructor(private actions$: Actions, private booksService: BooksService) {}
}
