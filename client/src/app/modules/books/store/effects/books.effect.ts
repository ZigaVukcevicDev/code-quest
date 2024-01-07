import { Injectable } from '@angular/core';
import { BooksService } from '@app/data/services/api/books-service/books-service';
import {
  loadBooksAction,
  loadBooksByNameAction,
  loadBooksErrorAction,
  loadBooksSuccessAction,
} from '@modules/books/store/actions/books.action';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, exhaustMap, map } from 'rxjs/operators';

// Note to code reviewer: Instead of class, it could be also written as functional effect
@Injectable()
export class BooksEffects {
  loadBooks$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadBooksAction),
      // exhaustMap waits for the inner observable to finish
      exhaustMap(() =>
        this.booksService.getBooks().pipe(
          map((books) => {
            console.log('effect loadBooks$ success', books);
            return loadBooksSuccessAction({ payload: books });
          }),
          catchError((error) => {
            console.log('effect loadBooks$ error', error);
            return of(loadBooksErrorAction());
          })
        )
      )
    )
  );

  loadBooksByName$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadBooksByNameAction),
      exhaustMap(() =>
        this.booksService.getBooksByName('The Mystery Knight').pipe(
          map((books) => {
            console.log('effect loadBooksByName$ success', books);
            return loadBooksSuccessAction({ payload: books });
          }),
          catchError((error) => {
            console.log('effect loadBooksByName$ error', error);
            return of(loadBooksErrorAction());
          })
        )
      )
    )
  );

  constructor(private actions$: Actions, private booksService: BooksService) {}
}
