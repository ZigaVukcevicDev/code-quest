import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BookComponent } from '@modules/books/components/book/book.component';

@NgModule({
  declarations: [BookComponent],
  imports: [CommonModule],
})
export class BooksModule {}
