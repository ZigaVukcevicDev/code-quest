import Book from '@app/data/books/models/book.interface';

export default interface BookDetail extends Book {
  isbn: string;
  numberOfPages: number;
  country: string;
  mediaType: string;
}
