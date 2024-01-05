import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { BookComponent } from '@app/modules/books/components/book/book.component';
import { BooksPageComponent } from '@app/modules/books/pages/books-page/books-page.component';
import { SharedModule } from '@app/shared/shared.module';

describe('BooksPageComponent', () => {
  let component: BooksPageComponent;
  let fixture: ComponentFixture<BooksPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        // Components
        BookComponent,
        // Pages
        BooksPageComponent,
        BooksPageComponent,
      ],
      imports: [SharedModule, RouterTestingModule],
    });
    fixture = TestBed.createComponent(BooksPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
