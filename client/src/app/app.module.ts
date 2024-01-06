import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '@app/app-routing.module';
import { AppComponent } from '@app/app.component';
import { MainPageComponent } from '@app/layout/main-page/main-page.component';
import { HeaderComponent } from '@layout/header/header.component';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [
    // Components
    AppComponent,
    // Layout components
    HeaderComponent,
    MainPageComponent,
  ],
  imports: [BrowserModule, SharedModule, AppRoutingModule, HttpClientModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
