import { Injectable } from '@angular/core';
import { BooksService } from '@app/data/services/api/books/books.service';
import { BooksFavoriteService } from '@app/data/services/books-favorite/books-favorite.service';
import {
  loadBookListAction,
  loadBookListByNameAction,
  loadBookListErrorAction,
  loadBookListSuccessAction,
} from '@app/modules/books/store/actions/book-list.action';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { forkJoin, of } from 'rxjs';
import {
  catchError,
  exhaustMap,
  map,
  mergeMap,
  switchMap,
} from 'rxjs/operators';

// Note to code reviewer: Instead of class, it could be also written as functional effect
@Injectable()
export class BookListEffects {
  loadBookList$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadBookListAction),
      mergeMap((action) =>
        forkJoin({
          bookList: this.booksService.getBookList(action.payload),
          /**
           * Note to code reviewer:
           *
           * When getting paginated items from API, it normally also returns the total (overall) number of items.
           * Having that information (and how many items per page) you can compose pagination.
           *
           * Since API does not support total value, bellow is an extra call to achieve this.
           *
           * IMPORTANT!
           *
           * This is a bad practice and should not be done in real case scenario. By making that kind of call,
           * you put burden on server, not to mention the client (browser). List of items can be very long and
           * those items also can have children with even more data.
           *
           */
          total: this.booksService.getBookListTotalNumber(),
        }).pipe(
          switchMap((result) => {
            const { bookList, total } = result;

            return this.booksFavoriteService.getFavoriteBookIdList().pipe(
              map((favoriteBookList) => {
                const updatedBookList = bookList.map((book) => {
                  const isFavorite = favoriteBookList.includes(book.id);
                  return { ...book, isFavorite };
                });

                return loadBookListSuccessAction({
                  payload: {
                    data: updatedBookList,
                    total: total,
                    currentPage: action.payload,
                  },
                });
              })
            );
          }),
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
              payload: {
                data: bookList,
                total: bookList.length,
                currentPage: 1, // Assuming that we can not have so many items (books) to pagination be needed
              },
            })
          ),
          catchError(() => of(loadBookListErrorAction()))
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
