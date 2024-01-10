import { Injectable } from '@angular/core';
import { BooksService } from '@app/data/services/api/books/books.service';
import {
  loadBookDetailAction,
  loadBookDetailErrorAction,
  loadBookDetailSuccessAction,
} from '@app/modules/books/store/actions/book-detail.action';
import {
  loadBookListByNameAction,
  loadBookListErrorAction,
  loadBookListSuccessAction,
} from '@app/modules/books/store/actions/book-list.action';
import parseIdFromApiBookUrlProperty from '@app/shared/utils/parse-id-from-api-book-url-property';
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
        // TODO: refactor if time, put object modification in service
        this.booksService.getBookDetailById(id).pipe(
          map((book) => ({
            id: parseIdFromApiBookUrlProperty(book),
            name: book.name,
            authors: book.authors,
            publisher: book.publisher,
            isFavorite: true,
            isbn: book.isbn,
            numberOfPages: book.numberOfPages,
            country: book.country,
            mediaType: book.mediaType,
          })),
          map((bookDetail) =>
            loadBookDetailSuccessAction({ payload: bookDetail })
          ),
          catchError(() => of(loadBookDetailErrorAction()))
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
          map((bookList) => loadBookListSuccessAction({ payload: bookList })),
          catchError(() => of(loadBookListErrorAction()))
        )
      )
    )
  );

  constructor(private actions$: Actions, private booksService: BooksService) {}
}
