import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookListPageComponent } from '@app/modules/books/pages/book-list-page/book-list-page.component';
import { BookFavoriteListPageComponent } from '@modules/books/pages/book-favorite-list-page/book-favorite-list-page.component';
import { BooksDetailPageComponent } from '@modules/books/pages/books-detail-page/books-detail-page.component';

const routes: Routes = [
  { path: '', component: BookListPageComponent },
  { path: 'favorite', component: BookFavoriteListPageComponent },
  { path: 'detail/:id', component: BooksDetailPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BooksRoutingModule {}
