import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BookFavoriteListPageComponent } from '@app/modules/books/pages/book-list-favorite-page/book-list-favorite.page.component';

describe('BookFavoriteListPageComponent', () => {
  let component: BookFavoriteListPageComponent;
  let fixture: ComponentFixture<BookFavoriteListPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BookFavoriteListPageComponent],
    });
    fixture = TestBed.createComponent(BookFavoriteListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
