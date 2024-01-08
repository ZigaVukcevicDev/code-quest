import { Injectable } from '@angular/core';
import BookFavorite from '@app/data/books/models/book-favorite.interface';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { v4 as uuidv4 } from 'uuid';

@Injectable({
  providedIn: 'root',
})
export class BooksFavoriteService {
  private favoriteBooksSubject = new BehaviorSubject<BookFavorite[]>([]);
  favoriteBooks$ = this.favoriteBooksSubject.asObservable();

  createFavoriteBook(bookId: string): void {
    const favoriteBooks = this.favoriteBooksSubject.getValue();
    const isBookInFavorites = this.isBookInFavorites(bookId);

    if (!isBookInFavorites) {
      const updatedFavoriteBooks: BookFavorite[] = [
        ...favoriteBooks,
        { id: uuidv4(), bookId },
      ];
      this.favoriteBooksSubject.next(updatedFavoriteBooks);
    }
  }

  getFavoriteBooks(): Observable<BookFavorite[]> {
    return this.favoriteBooks$;
  }

  removeFavoriteBook(favoriteBookId: string): void {
    const favoriteBooks = this.favoriteBooksSubject.getValue();
    const updatedFavoriteBooks = favoriteBooks.filter(
      (favoriteBook) => favoriteBook.id !== favoriteBookId
    );
    this.favoriteBooksSubject.next(updatedFavoriteBooks);
  }

  private isBookInFavorites(bookId: string): Observable<boolean> {
    return this.favoriteBooks$.pipe(
      map((favoriteBooks) =>
        favoriteBooks.some((favoriteBook) => bookId === favoriteBook.id)
      )
    );
  }
}
