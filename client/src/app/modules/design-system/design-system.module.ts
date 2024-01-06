import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared/shared.module';
import { DesignSystemRoutingModule } from '@modules/design-system/design-system-routing.module';
import { DesignSystemPageComponent } from '@modules/design-system/pages/design-system-page/design-system-page.component';
import { NgIconsModule } from '@ng-icons/core';
import {
  featherChrome,
  featherCoffee,
  featherHeart,
} from '@ng-icons/feather-icons';

@NgModule({
  declarations: [
    // Pages
    DesignSystemPageComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    DesignSystemRoutingModule,
    NgIconsModule.withIcons({
      featherHeart,
      featherChrome,
      featherCoffee,
    }),
  ],
})
export class DesignSystemModule {}
