import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BookDetailComponent } from '@app/modules/books/components/book-detail/book-detail.component';
import { BookDetailPageComponent } from '@app/modules/books/pages/book-detail-page/book-detail-page.component';
import { SharedModule } from '@app/shared/shared.module';

describe('BookDetailPageComponent', () => {
  let component: BookDetailPageComponent;
  let fixture: ComponentFixture<BookDetailPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        // Components
        BookDetailComponent,
        // Pages
        BookDetailPageComponent,
      ],
      imports: [SharedModule],
    });
    fixture = TestBed.createComponent(BookDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
