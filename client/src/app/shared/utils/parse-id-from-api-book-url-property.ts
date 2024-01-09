import BookFromApi from '@app/data/services/api/books/models/book-from-api.interface';

export default function parseIdFromApiBookUrlProperty(
  book: BookFromApi
): string {
  /**
   * API does not specifically return an id property.
   * It returns a url property, e.g., `https://anapioficeandfire.com/api/books/3` - which
   * could be parsed, taking the last segment as the unique identifier.
   */

  const bookUrlSegments = book.url.split('/');
  const parsedId = bookUrlSegments[bookUrlSegments.length - 1];

  return parsedId;
}
