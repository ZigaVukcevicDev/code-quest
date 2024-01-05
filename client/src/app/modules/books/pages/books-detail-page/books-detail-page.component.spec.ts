import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BookDetailComponent } from '@app/modules/books/components/book-detail/book-detail.component';
import { BooksDetailPageComponent } from '@app/modules/books/pages/books-detail-page/books-detail-page.component';
import { SharedModule } from '@app/shared/shared.module';

describe('BooksDetailPageComponent', () => {
  let component: BooksDetailPageComponent;
  let fixture: ComponentFixture<BooksDetailPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        // Components
        BookDetailComponent,
        // Pages
        BooksDetailPageComponent,
      ],
      imports: [SharedModule],
    });
    fixture = TestBed.createComponent(BooksDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
