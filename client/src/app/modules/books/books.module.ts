import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BookDetailPageComponent } from '@app/modules/books/pages/book-detail-page/book-detail-page.component';
import { BookListEffects } from '@app/modules/books/store/effects/book-list.effect';
import { bookListReducer } from '@app/modules/books/store/reducers/book-list.reducer';
import { SharedModule } from '@app/shared/shared.module';
import { BooksRoutingModule } from '@modules/books/books-routing.module';
import { BookDetailComponent } from '@modules/books/components/book-detail/book-detail.component';
import { BookListComponent } from '@modules/books/components/book-list/book-list.component';
import { BookComponent } from '@modules/books/components/book/book.component';
import { BookFavoriteListPageComponent } from '@modules/books/pages/book-favorite-list-page/book-favorite-list-page.component';
import { BookListPageComponent } from '@modules/books/pages/book-list-page/book-list-page.component';
import { NgIconsModule } from '@ng-icons/core';
import { featherHeart, featherSearch } from '@ng-icons/feather-icons';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

@NgModule({
  declarations: [
    // Components
    BookComponent,
    BookDetailComponent,
    // Pages
    BookListPageComponent,
    BookDetailPageComponent,
    BookFavoriteListPageComponent,
    BookListComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    NgIconsModule.withIcons({
      featherHeart,
      featherSearch,
    }),
    BooksRoutingModule,
    StoreModule.forFeature('bookList', bookListReducer),
    EffectsModule.forFeature([BookListEffects]),
  ],
})
export class BooksModule {}
