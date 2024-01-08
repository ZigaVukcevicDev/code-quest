import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgIconsModule } from '@ng-icons/core';
import { featherHome } from '@ng-icons/feather-icons';
import { BreadcrumbsComponent } from '@shared/components/breadcrumbs/breadcrumbs.component';
import { DividerPipe } from '@shared/pipes/divider/divider.pipe';
import { ErrorGenericComponent } from './components/error-generic/error-generic.component';

@NgModule({
  declarations: [
    // Components
    BreadcrumbsComponent,
    ErrorGenericComponent,
    // Pipes
    DividerPipe,
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgIconsModule.withIcons({
      featherHome,
    }),
    FormsModule,
  ],
  exports: [
    // Components
    BreadcrumbsComponent,
    ErrorGenericComponent,
    // Pipes
    DividerPipe,
  ],
})
export class SharedModule {}
