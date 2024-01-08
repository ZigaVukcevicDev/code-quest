import { Injectable } from '@angular/core';
import BookFavorite from '@app/data/books/models/book-favorite.interface';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { v4 as uuidv4 } from 'uuid';

@Injectable({
  providedIn: 'root',
})
export class BooksFavoriteService {
  private favoriteBookListSubject = new BehaviorSubject<BookFavorite[]>([]);
  private favoriteBookList$ = this.favoriteBookListSubject.asObservable();

  createFavoriteBook(bookId: string): void {
    const currentList = this.favoriteBookListSubject.getValue();
    const isBookInFavoriteList = this.isBookInFavoriteList(bookId);

    if (!isBookInFavoriteList) {
      const updatedList: BookFavorite[] = [
        ...currentList,
        { id: uuidv4(), bookId },
      ];
      this.favoriteBookListSubject.next(updatedList);
    }
  }

  getFavoriteBookList(): Observable<BookFavorite[]> {
    return this.favoriteBookList$;
  }

  removeFavoriteBook(favoriteBookId: string): void {
    const currentList = this.favoriteBookListSubject.getValue();
    const updatedList = currentList.filter(
      (favoriteBook) => favoriteBook.id !== favoriteBookId
    );
    this.favoriteBookListSubject.next(updatedList);
  }

  private isBookInFavoriteList(bookId: string): Observable<boolean> {
    return this.favoriteBookList$.pipe(
      map((favoriteBookList) =>
        favoriteBookList.some((favoriteBook) => bookId === favoriteBook.id)
      )
    );
  }
}
