import Book from '@data/books/models/book.interface';

export const bookMock1: Book = {
  id: '1',
  name: 'A Game of Thrones',
  authors: ['George R. R. Martin'],
  publisher: 'Bantam Books',
  isFavorite: false,
};

export const bookMock2: Book = {
  id: '2',
  name: 'The Rogue Prince',
  authors: ['George R. R. Martin', 'Paul Davies'],
  publisher: 'Bantam Books',
  isFavorite: false,
};
