import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgIconsModule } from '@ng-icons/core';
import { featherHome } from '@ng-icons/feather-icons';
import { BreadcrumbsComponent } from '@shared/components/breadcrumbs/breadcrumbs.component';
import { ErrorGenericComponent } from '@shared/components/error-generic/error-generic.component';
import { PaginationComponent } from '@shared/components/pagination/pagination.component';
import { DividerPipe } from '@shared/pipes/divider/divider.pipe';
import { NumericListPipe } from '@shared/pipes/numeric-list/numeric-list.pipe';

@NgModule({
  declarations: [
    // Components
    BreadcrumbsComponent,
    ErrorGenericComponent,
    PaginationComponent,
    // Pipes
    DividerPipe,
    NumericListPipe,
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
    PaginationComponent,
    // Pipes
    DividerPipe,
    NumericListPipe,
  ],
})
export class SharedModule {}
