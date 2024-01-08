import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { BooksService } from '@app/data/services/api/books/books.service';

describe('BooksService', () => {
  let service: BooksService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    service = TestBed.inject(BooksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
