import { Injectable } from '@angular/core';
import { BehaviorSubject, EMPTY, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BooksFavoriteService {
  private favoriteBookListIdsSubject$$ = new BehaviorSubject<string[]>([]);

  constructor() {}

  createFavoriteBook(bookId: string): Observable<void> {
    const currentList = this.favoriteBookListIdsSubject$$.value;
    const updatedList = [...currentList, bookId];
    this.favoriteBookListIdsSubject$$.next(updatedList);
    // Needs to return observable to be able to pipe (e.g. in effect)
    return EMPTY;
  }

  getFavoriteBookIdList(): Observable<string[]> {
    return this.favoriteBookListIdsSubject$$.asObservable();
  }

  removeFavoriteBook(bookId: string): Observable<void> {
    const currentList = this.favoriteBookListIdsSubject$$.value;
    const updatedList = currentList.filter((id) => id !== bookId);
    this.favoriteBookListIdsSubject$$.next(updatedList);
    return EMPTY;
  }
}
