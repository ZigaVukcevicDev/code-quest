import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '@app/shared/shared.module';
import { BooksRoutingModule } from '@modules/books/books-routing.module';
import { BookDetailComponent } from '@modules/books/components/book-detail/book-detail.component';
import { BookComponent } from '@modules/books/components/book/book.component';
import { BooksDetailPageComponent } from '@modules/books/pages/books-detail-page/books-detail-page.component';
import { BooksPageComponent } from '@modules/books/pages/books-page/books-page.component';
import { BooksEffects } from '@modules/books/store/effects/books.effect';
import { booksReducer } from '@modules/books/store/reducers/books.reducer';
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
    BooksPageComponent,
    BooksDetailPageComponent,
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
    StoreModule.forFeature('books', booksReducer),
    EffectsModule.forFeature([BooksEffects]),
  ],
})
export class BooksModule {}
