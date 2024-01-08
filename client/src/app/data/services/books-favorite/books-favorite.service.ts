import { Injectable } from '@angular/core';
import BookFavorite from '@app/data/books/models/book-favorite.interface';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { v4 as uuidv4 } from 'uuid';

@Injectable({
  providedIn: 'root',
})
export class BooksFavoriteService {
  private favoriteBookListSubject = new BehaviorSubject<BookFavorite[]>([]);

  createFavoriteBook(bookId: string): void {
    const currentList = this.favoriteBookListSubject.getValue();
    const updatedList: BookFavorite[] = [
      ...currentList,
      { id: uuidv4(), bookId },
    ];

    this.favoriteBookListSubject.next(updatedList);
  }

  // TODO: find a better name or just really provide ids
  getFavoriteBookListIds(): Observable<BookFavorite[]> {
    console.log('getFavoriteBookList called!');
    // TODO: this is just a demo placeholder
    return of([{ id: 'XXX', bookId: '5' }]);
  }

  removeFavoriteBook(favoriteBookId: string): void {
    const currentList = this.favoriteBookListSubject.getValue();
    const updatedList = currentList.filter(
      (favoriteBook) => favoriteBook.id !== favoriteBookId
    );
    this.favoriteBookListSubject.next(updatedList);
  }
}
