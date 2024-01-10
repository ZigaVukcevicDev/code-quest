import BookFromApi from './book-from-api.interface';

export default interface BookDetailFromApi extends BookFromApi {
  isbn: string;
  numberOfPages: number;
  country: string;
  mediaType: string;
}
