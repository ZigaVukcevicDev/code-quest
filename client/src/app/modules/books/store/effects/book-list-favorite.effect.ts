import { Injectable } from '@angular/core';
import { BooksService } from '@app/data/services/api/books/books.service';
import {
  loadBookListFavoriteAction,
  loadBookListFavoriteErrorAction,
  loadBookListFavoriteSuccessAction,
} from '@app/modules/books/store/actions/book-list-favorite.action';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, exhaustMap, map } from 'rxjs/operators';

@Injectable()
export class BookListFavoriteEffects {
  loadBookListFavorite$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadBookListFavoriteAction),
      // TODO
      exhaustMap(() =>
        this.booksService.getBookList().pipe(
          map((bookList) => {
            console.log('effect loadBookListFavorite$ success', bookList);
            return loadBookListFavoriteSuccessAction({ payload: bookList });
          }),
          catchError((error) => {
            console.log('effect loadBookListFavorite$ error', error);
            return of(loadBookListFavoriteErrorAction());
          })
        )
      )
    )
  );

  constructor(private actions$: Actions, private booksService: BooksService) {}
}
