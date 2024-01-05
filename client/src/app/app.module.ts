import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '@app/app-routing.module';
import { AppComponent } from '@app/app.component';
import { BreadcrumbsComponent } from '@app/shared/components/breadcrumbs/breadcrumbs.component';
import { BookDetailPageComponent } from '@layout/book-detail-page/book-detail-page.component';
import { BooksPageComponent } from '@layout/books-page/books-page.component';
import { DesignSystemPageComponent } from '@layout/design-system-page/design-system-page.component';
import { BooksRoutingModule } from '@modules/books/books-routing.module';
import { BookComponent } from '@modules/books/components/book/book.component';
import { DividerPipe } from '@shared/pipes/divider/divider.pipe';

@NgModule({
  declarations: [
    // Components
    AppComponent,
    BreadcrumbsComponent,
    BookComponent,
    // Pages
    BooksPageComponent,
    BookDetailPageComponent,
    DesignSystemPageComponent,
    // Pipes
    DividerPipe,
  ],
  imports: [BrowserModule, AppRoutingModule, BooksRoutingModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
