import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BookDetailPageComponent } from '@app/modules/books/pages/book-detail-page/book-detail.page.component';
import { BookFavoriteListPageComponent } from '@app/modules/books/pages/book-list-favorite-page/book-list-favorite.page.component';
import { BookListPageComponent } from '@app/modules/books/pages/book-list-page/book-list.page.component';
import { BookDetailEffects } from '@app/modules/books/store/effects/book-detail.effect';
import { BookListFavoriteEffects } from '@app/modules/books/store/effects/book-list-favorite.effect';
import { BookListEffects } from '@app/modules/books/store/effects/book-list.effect';
import { bookDetailReducer } from '@app/modules/books/store/reducers/book-detail.reducer';
import { bookListFavoriteReducer } from '@app/modules/books/store/reducers/book-list-favorite.reducer';
import { bookListReducer } from '@app/modules/books/store/reducers/book-list.reducer';
import { SharedModule } from '@app/shared/shared.module';
import { BooksRoutingModule } from '@modules/books/books-routing.module';
import { BookDetailComponent } from '@modules/books/components/book-detail/book-detail.component';
import { BookListComponent } from '@modules/books/components/book-list/book-list.component';
import { BookComponent } from '@modules/books/components/book/book.component';
import { BookFavoriteEffects } from '@modules/books/store/effects/book-favorite.effect';
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
    // Store features
    StoreModule.forFeature('bookList', bookListReducer),
    StoreModule.forFeature('bookListFavorite', bookListFavoriteReducer),
    StoreModule.forFeature('bookDetail', bookDetailReducer),
    // Effects
    EffectsModule.forFeature([BookListEffects]),
    EffectsModule.forFeature([BookListFavoriteEffects]),
    EffectsModule.forFeature([BookDetailEffects]),
    EffectsModule.forFeature([BookFavoriteEffects]),
  ],
})
export class BooksModule {}
