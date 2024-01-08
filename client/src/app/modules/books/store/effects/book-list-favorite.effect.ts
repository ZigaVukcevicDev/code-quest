import { Injectable } from '@angular/core';
import { BooksService } from '@app/data/services/api/books/books.service';
import { BooksFavoriteService } from '@app/data/services/books-favorite/books-favorite.service';
import {
  loadBookListFavoriteAction,
  loadBookListFavoriteErrorAction,
  loadBookListFavoriteSuccessAction,
} from '@app/modules/books/store/actions/book-list-favorite.action';
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
        this.booksFavoriteService.getFavoriteBookListIds().pipe(
          switchMap((favoriteBooks) => {
            // TODO: refactor this part with better naming and comment rxjs operators
            // Perform HTTP calls using bookService
            const httpRequests = favoriteBooks.map((favoriteBook) =>
              this.booksService.getBookById(favoriteBook.bookId).pipe(
                map((book) => ({
                  id: book.id, // TODO
                  name: book.name,
                  authors: book.authors,
                  publisher: book.publisher,
                  isFavorite: true, // TODO: really? or do i even need this for favorites?
                }))
              )
            );

            return forkJoin(httpRequests).pipe(
              map((bookList) => {
                console.log('effect loadBookListFavorite$ success', bookList);
                return loadBookListFavoriteSuccessAction({ payload: bookList });
              }),
              catchError((error) => {
                console.log('effect loadBookListFavorite$ error', error);
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
