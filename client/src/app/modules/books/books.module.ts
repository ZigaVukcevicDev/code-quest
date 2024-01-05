import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BookDetailComponent } from '@modules/books/components/book-detail/book-detail.component';
import { BookComponent } from '@modules/books/components/book/book.component';

@NgModule({
  declarations: [BookComponent, BookDetailComponent],
  imports: [CommonModule],
})
export class BooksModule {}
