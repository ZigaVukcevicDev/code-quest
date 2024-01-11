import BookResponseDto from './book-response.dto';

export default interface BookDetailResponseDto extends BookResponseDto {
  isbn: string;
  numberOfPages: number;
  country: string;
  mediaType: string;
}
