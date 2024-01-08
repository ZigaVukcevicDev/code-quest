import BookDetail from '@app/data/books/models/book-detail.interface';

export const bookDetailMock: BookDetail = {
  id: '2',
  name: 'The Rogue Prince',
  authors: ['George R. R. Martin', 'Paul Davies'],
  publisher: 'Bantam Books',
  isFavorite: false,
  isbn: '978-0553103540',
  numberOfPages: 694,
  country: 'United States',
  mediaType: 'Hardcover',
};
