import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookDetailPageComponent } from '@app/layout/book-detail-page/book-detail-page.component';
import { BooksPageComponent } from '@app/layout/books-page/books-page.component';

const routes: Routes = [
  { path: 'books', component: BooksPageComponent },
  { path: 'book/:id', component: BookDetailPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BooksRoutingModule {}
