import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { environment } from '@environments/environment';
import { DesignSystemPageComponent } from '@layout/design-system-page/design-system-page.component';

const routes: Routes = [];

/**
 * NOTE
 *
 * Design system page uses semantic tags (e.g. h1) and should never be visible on production.
 * We are using it only outside of production, avoiding web crawlers to index it.
 */

if (!environment.production) {
  routes.push({ path: 'design-system', component: DesignSystemPageComponent });
}

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
