import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '@app/app-routing.module';
import { AppComponent } from '@app/app.component';
import { DesignSystemPageComponent } from '@layout/design-system-page/design-system-page.component';
import { BreadcrumbsComponent } from '@shared/breadcrumbs/breadcrumbs.component';

@NgModule({
  declarations: [AppComponent, DesignSystemPageComponent, BreadcrumbsComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
