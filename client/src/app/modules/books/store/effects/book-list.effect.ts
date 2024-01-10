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
          // TODO: note for code reviewer
          total: this.booksService.getBookListTotal(),
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
