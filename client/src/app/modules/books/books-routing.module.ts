import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookDetailPageComponent } from '@app/modules/books/pages/book-detail-page/book-detail.page.component';
import { BookFavoriteListPageComponent } from '@app/modules/books/pages/book-list-favorites-page/book-favorite-list.page.component';
import { BookListPageComponent } from '@app/modules/books/pages/book-list-page/book-list.page.component';

const routes: Routes = [
  { path: '', component: BookListPageComponent },
  { path: 'favorite', component: BookFavoriteListPageComponent },
  { path: 'detail/:id', component: BookDetailPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BooksRoutingModule {}
