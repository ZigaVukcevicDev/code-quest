import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { environment } from '@environments/environment';
import { MainPageComponent } from '@layout/main-page/main-page.component';
import { BooksModule } from '@modules/books/books.module';

const routes: Routes = [
  {
    path: '',
    component: MainPageComponent,
    children: [
      {
        path: 'books',
        loadChildren: () =>
          import('@modules/books/books.module').then(
            (module): typeof BooksModule => module.BooksModule
          ),
      },
    ],
  },
];

/**
 * NOTE
 *
 * Design system page uses semantic tags (e.g. h1) and should never be visible on production.
 * It should be available only outside of production, avoiding web crawlers to index it and
 * run into SEO issues.
 */

if (!environment.production) {
  if (routes[0].children) {
    routes[0].children.push({
      path: 'design-system',
      loadChildren: () =>
        import('@modules/design-system/design-system.module').then(
          (module): typeof BooksModule => module.DesignSystemModule
        ),
    });
  }
}

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
