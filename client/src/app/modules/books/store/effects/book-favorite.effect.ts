import { Injectable } from '@angular/core';
import { BooksFavoriteService } from '@app/data/services/books-favorite/books-favorite.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap } from 'rxjs/operators';
import {
  createBookFavoriteAction,
  createBookFavoriteSuccessAction,
  removeBookFavoriteAction,
  removeBookFavoriteSuccessAction,
} from '../actions/book-favorite.action';

@Injectable()
export class BookFavoriteEffects {
  createBookFavorite$ = createEffect(() =>
    this.actions$.pipe(
      ofType(createBookFavoriteAction),
      mergeMap((action) =>
        this.booksFavoriteService
          .createFavoriteBook(action.payload)
          .pipe(map(() => createBookFavoriteSuccessAction()))
      )
    )
  );

  removeBookFavorite$ = createEffect(() =>
    this.actions$.pipe(
      ofType(removeBookFavoriteAction),
      mergeMap((action) =>
        this.booksFavoriteService
          .removeFavoriteBook(action.payload)
          .pipe(map(() => removeBookFavoriteSuccessAction()))
      )
    )
  );

  constructor(
    private actions$: Actions,
    private booksFavoriteService: BooksFavoriteService
  ) {}
}
