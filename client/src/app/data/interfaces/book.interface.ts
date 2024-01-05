export default interface Book {
  url: string; // NOTE: Can be used as unique id
  name: string;
  authors: string[];
  publisher: string;
  numberOfPages: number;
  isbn: string;
  mediaType: string;
}
