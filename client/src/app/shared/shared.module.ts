import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BreadcrumbsComponent } from '@shared/components/breadcrumbs/breadcrumbs.component';
import { DividerPipe } from '@shared/pipes/divider/divider.pipe';

@NgModule({
  declarations: [
    // Components
    BreadcrumbsComponent,
    // Pipes
    DividerPipe,
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    // Components
    BreadcrumbsComponent,
    // Pipes
    DividerPipe,
  ],
})
export class SharedModule {}
