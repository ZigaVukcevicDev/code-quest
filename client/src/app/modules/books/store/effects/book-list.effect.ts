import { Injectable } from '@angular/core';
import { BooksService } from '@app/data/services/api/books/books.service';
import {
  loadBookListAction,
  loadBookListByNameAction,
  loadBookListErrorAction,
  loadBookListSuccessAction,
} from '@app/modules/books/store/actions/book-list.action';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { forkJoin, of } from 'rxjs';
import { catchError, exhaustMap, map, mergeMap } from 'rxjs/operators';

// Note to code reviewer: Instead of class, it could be also written as functional effect
@Injectable()
export class BookListEffects {
  loadBookList$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadBookListAction),
      mergeMap(() =>
        forkJoin({
          bookList: this.booksService.getBookList(),
          total: this.booksService.getBookListTotal(),
        }).pipe(
          map((result) =>
            loadBookListSuccessAction({
              payload: { data: result.bookList, total: result.total },
            })
          ),
          catchError(() => of(loadBookListErrorAction()))
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
          map((bookList) =>
            loadBookListSuccessAction({
              payload: { data: bookList, total: bookList.length },
            })
          ),
          catchError(() => of(loadBookListErrorAction()))
        )
      )
    )
  );

  constructor(private actions$: Actions, private booksService: BooksService) {}
}
