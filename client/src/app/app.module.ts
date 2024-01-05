import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '@app/app-routing.module';
import { AppComponent } from '@app/app.component';
import { DesignSystemPageComponent } from '@layout/design-system-page/design-system-page.component';
import { BreadcrumbsComponent } from '@shared/breadcrumbs/breadcrumbs.component';
import { BooksPageComponent } from './layout/books-page/books-page.component';
import { BookComponent } from './modules/books/book/book.component';
import { BooksRoutingModule } from './modules/books/books-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    DesignSystemPageComponent,
    BreadcrumbsComponent,
    BooksPageComponent,
    BookComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, BooksRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
