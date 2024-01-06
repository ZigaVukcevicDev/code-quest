import { Component, OnInit } from '@angular/core';
import { AppState } from '@app/app-state.interface';
import BookColumnWidths from '@app/data/books/models/book-column-widths.interface';
import Book from '@app/data/books/models/book.interface';
import { BooksService } from '@app/data/services/books-service/books-service';
import { selectBooksData } from '@modules/books/store/selectors/books.selector';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'zv-books-page',
  templateUrl: './books-page.component.html',
  styleUrls: ['./books-page.component.scss'],
})
export class BooksPageComponent implements OnInit {
  books$: Observable<Book[]> = this.store.select(selectBooksData);

  columnWidths: BookColumnWidths = {
    name: 35,
    authors: 35,
    publisher: 20,
    favorite: 10,
  };

  constructor(
    private readonly booksService: BooksService,
    private readonly store: Store<AppState>
  ) {}

  ngOnInit() {
    // TODO: remove
    this.store
      .select((state) => state)
      .subscribe((state) => console.log({ state }));

    this.booksService.getBooks().subscribe({
      next: (value) => {
        console.log('Books');
        console.log(value);
      },
    });

    this.booksService.getBookById(1).subscribe({
      next: (value) => {
        console.log('Book with id 1');
        console.log(value);
      },
    });
  }

  /**
   * Note:
   *
   * To avoid expensive operation, the default tracking algorithm can be customized
   * by supplying the trackBy option which takes a function that has two arguments:
   * index and item. If trackBy is given, Angular tracks changes by the return value
   * of the function. If it sees two elements with the same identity, it will proceed
   * to check the content of the elements and will only repaint/re-render if the content
   * is changed.
   *
   * There is also a rumor that usage of trackBy will be mandatory in next versions of Angular.
   *
   * Read more at: https://stackoverflow.com/questions/42108217/how-to-use-trackby-with-ngfor
   */

  bookTrackBy(index: number, item: Book) {
    return item.id;
  }
}
