const mainPath = 'books';

export enum UrlPath {
  BOOK_LIST = mainPath,
  BOOK_FAVORITE_LIST = `${mainPath}/favorite`,
  BOOK_DETAIL = `${mainPath}/detail`,
  DESIGN_SYSTEM = 'design-system',
}
