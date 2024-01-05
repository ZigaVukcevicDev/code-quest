import { Component } from '@angular/core';
import Book from '@app/data/interfaces/book.interface';

@Component({
  selector: 'zv-books-page',
  templateUrl: './books-page.component.html',
  styleUrls: ['./books-page.component.scss'],
})
export class BooksPageComponent {
  books: Book[] = [
    {
      id: 1,
      name: 'A Game of Thrones',
      authors: ['George R. R. Martin'],
      publisher: 'Bantam Books',
      isFavorite: false,
    },
    {
      id: 2,
      name: 'The Rogue Prince',
      authors: ['George R. R. Martin', 'Paul Davies'],
      publisher: 'Bantam Books',
      isFavorite: false,
    },
  ];

  /**
   * NOTE
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
