import { Component, Input } from '@angular/core';
import BookColumnClasses from '@app/data/books/models/book-column-classes.interface';
import Book from '@app/data/books/models/book.interface';

@Component({
  selector: 'cq-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
})
export class BookListComponent {
  @Input() list: Book[] = [];

  /**
   * Note:
   *
   * tailwindcss is not capable to pick up dynamic classes.
   * We must provide whole class names.
   */

  columnClasses: BookColumnClasses = {
    name: 'sm:basis-[35%]',
    authors: 'sm:basis-[35%]',
    publisher: 'sm:basis-[20%]',
    favorite: 'sm:basis-[10%]',
  };

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

  trackBookById(index: number, item: Book) {
    return item.id;
  }
}
