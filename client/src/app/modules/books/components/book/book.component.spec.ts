import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BookComponent } from '@app/modules/books/components/book/book.component';
import { SharedModule } from '@app/shared/shared.module';

describe('BookComponent', () => {
  let component: BookComponent;
  let fixture: ComponentFixture<BookComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BookComponent],
      imports: [SharedModule],
    });
    fixture = TestBed.createComponent(BookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
