import { Injectable } from '@angular/core';
import { BooksService } from '@app/data/services/api/books/books.service';
import {
  loadBookDetailAction,
  loadBookDetailErrorAction,
  loadBookDetailSuccessAction,
} from '@app/modules/books/store/actions/book-detail.action';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, exhaustMap, map } from 'rxjs/operators';

@Injectable()
export class BookDetailEffects {
  loadBookDetail$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadBookDetailAction),
      map((action) => action.payload),
      exhaustMap((id) =>
        this.booksService.getBookDetailById(id).pipe(
          map((bookDetail) =>
            loadBookDetailSuccessAction({ payload: bookDetail })
          ),
          catchError(() => of(loadBookDetailErrorAction()))
        )
      )
    )
  );

  constructor(private actions$: Actions, private booksService: BooksService) {}
}
