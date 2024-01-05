import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { bookColumnWidths } from '@app/data/books/mocks/book-column-widths.mock';
import { bookMock1 } from '@app/data/books/mocks/book.mock';
import { BookComponent } from '@app/modules/books/components/book/book.component';
import { SharedModule } from '@app/shared/shared.module';

describe('BookComponent', () => {
  let component: BookComponent;
  let fixture: ComponentFixture<BookComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BookComponent],
      imports: [SharedModule, RouterTestingModule],
    });
    fixture = TestBed.createComponent(BookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    component.book = bookMock1;
    component.columnWidths = bookColumnWidths;

    expect(component).toBeTruthy();
  });
});
