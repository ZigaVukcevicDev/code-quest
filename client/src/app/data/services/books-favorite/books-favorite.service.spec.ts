import { TestBed } from '@angular/core/testing';
import { BooksFavoriteService } from '@app/data/services/books-favorite/books-favorite.service';

describe('BooksFavoriteService', () => {
  let service: BooksFavoriteService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
    });
    service = TestBed.inject(BooksFavoriteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
