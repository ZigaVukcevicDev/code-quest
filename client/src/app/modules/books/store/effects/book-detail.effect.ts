import { Injectable } from '@angular/core';
import { BooksService } from '@app/data/services/api/books/books.service';
import {
  loadBookDetailAction,
  loadBookDetailErrorAction,
  loadBookDetailSuccessAction,
} from '@app/modules/books/store/actions/book-detail.action';
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

  constructor(private actions$: Actions, private booksService: BooksService) {}
}
