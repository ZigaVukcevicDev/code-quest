import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { bookMock1, bookMock2 } from '@app/data/books/mocks/book.mock';
import { BookComponent } from '@app/modules/books/components/book/book.component';
import { BooksPageComponent } from '@app/modules/books/pages/books-page/books-page.component';
import { BooksState } from '@app/modules/books/store/data/models/books-state.interface';
import { SharedModule } from '@app/shared/shared.module';
import { provideMockStore } from '@ngrx/store/testing';

describe('BooksPageComponent', () => {
  let component: BooksPageComponent;
  let fixture: ComponentFixture<BooksPageComponent>;

  beforeEach(() => {
    const initialState: BooksState = {
      data: [bookMock1, bookMock2],
      isPending: false,
      hasLoaded: false,
    };

    TestBed.configureTestingModule({
      declarations: [
        // Components
        BookComponent,
        // Pages
        BooksPageComponent,
        BooksPageComponent,
      ],
      imports: [SharedModule, RouterTestingModule, HttpClientModule],
      providers: [provideMockStore({ initialState })],
    });
    fixture = TestBed.createComponent(BooksPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
