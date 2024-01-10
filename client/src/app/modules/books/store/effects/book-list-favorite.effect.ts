import { Injectable } from '@angular/core';
import { BooksService } from '@app/data/services/api/books/books.service';
import { BooksFavoriteService } from '@app/data/services/books-favorite/books-favorite.service';
import {
  loadBookListFavoriteAction,
  loadBookListFavoriteErrorAction,
  loadBookListFavoriteSuccessAction,
} from '@app/modules/books/store/actions/book-list-favorite.action';
import parseIdFromApiBookUrlProperty from '@app/shared/utils/parse-id-from-api-book-url-property';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { forkJoin, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

@Injectable()
export class BookListFavoriteEffects {
  /**
   * Note to code reviewer:
   *
   * I decided to put the logic (booksService and booksFavoriteService method calls)
   * into following reducer. This way those two services stay independent.
   *
   * The other solution would be to use booksService inside of booksFavoriteService,
   * which would reduce logic in reducer but services would not be anymore independent.
   * I don't know what would be better, discussion desired.
   */

  loadBookListFavorite$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadBookListFavoriteAction),
      switchMap(() =>
        this.booksFavoriteService.getFavoriteBookIdList().pipe(
          switchMap((favoriteBookIdList) => {
            const requests = favoriteBookIdList.map((bookId) =>
              // TODO: refactor if time, put object modification in service
              this.booksService.getBookById(bookId).pipe(
                map((book) => {
                  return {
                    id: parseIdFromApiBookUrlProperty(book),
                    name: book.name,
                    authors: book.authors,
                    publisher: book.publisher,
                    isFavorite: true,
                  };
                })
              )
            );

            return forkJoin(requests).pipe(
              map((bookList) => {
                return loadBookListFavoriteSuccessAction({ payload: bookList });
              }),
              catchError(() => {
                return of(loadBookListFavoriteErrorAction());
              })
            );
          })
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private booksService: BooksService,
    private booksFavoriteService: BooksFavoriteService
  ) {}
}
