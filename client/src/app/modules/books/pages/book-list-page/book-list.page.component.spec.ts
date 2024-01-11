import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { bookMock1, bookMock2 } from '@app/data/books/mocks/book.mock';
import { BookComponent } from '@app/modules/books/components/book/book.component';
import { BookListPageComponent } from '@app/modules/books/pages/book-list-page/book-list.page.component';
import { BookListState } from '@app/modules/books/store/data/models/book-list/book-list.state.interface';
import { SharedModule } from '@app/shared/shared.module';
import { provideMockStore } from '@ngrx/store/testing';

describe('BookListPageComponent', () => {
  let component: BookListPageComponent;
  let fixture: ComponentFixture<BookListPageComponent>;

  beforeEach(() => {
    const initialState: BookListState = {
      data: [bookMock1, bookMock2],
      total: 2,
      currentPage: 1,
      isLoading: false,
      hasLoaded: false,
    };

    TestBed.configureTestingModule({
      declarations: [
        // Components
        BookComponent,
        // Pages
        BookListPageComponent,
      ],
      imports: [SharedModule, RouterTestingModule, HttpClientModule],
      providers: [provideMockStore({ initialState })],
    });
    fixture = TestBed.createComponent(BookListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
