import Book from '@data/interfaces/book.interface';

export default interface BookDetail extends Book {
  isbn: string;
  numberOfPages: number;
  country: string;
  mediaType: string;
}
