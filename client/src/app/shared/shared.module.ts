import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgIconsModule } from '@ng-icons/core';
import { featherHome } from '@ng-icons/feather-icons';
import { BreadcrumbsComponent } from '@shared/components/breadcrumbs/breadcrumbs.component';
import { DividerPipe } from '@shared/pipes/divider/divider.pipe';

@NgModule({
  declarations: [
    // Components
    BreadcrumbsComponent,
    // Pipes
    DividerPipe,
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgIconsModule.withIcons({
      featherHome,
    }), // NOTE: see all available icons at https://feathericons.com/],
  ],
  exports: [
    // Components
    BreadcrumbsComponent,
    // Pipes
    DividerPipe,
  ],
})
export class SharedModule {}
