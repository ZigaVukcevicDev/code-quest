import { TestBed } from '@angular/core/testing';
import { BooksService } from '@app/data/services/books-service/books-service';

describe('BooksServiceService', () => {
  let service: BooksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BooksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
