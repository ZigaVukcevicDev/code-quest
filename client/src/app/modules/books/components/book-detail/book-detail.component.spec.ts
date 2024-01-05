import { ComponentFixture, TestBed } from '@angular/core/testing';
import { bookDetailMock } from '@app/data/books/mocks/book-detail.mock';
import { SharedModule } from '@app/shared/shared.module';
import { BookDetailComponent } from '@modules/books/components/book-detail/book-detail.component';

describe('BookDetailComponent', () => {
  let component: BookDetailComponent;
  let fixture: ComponentFixture<BookDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BookDetailComponent],
      imports: [SharedModule],
    });
    fixture = TestBed.createComponent(BookDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    component.bookDetail = bookDetailMock;

    expect(component).toBeTruthy();
  });
});
