import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DesignSystemPageComponent } from '@app/modules/design-system/pages/design-system-page/design-system.page.component';

const routes: Routes = [{ path: '', component: DesignSystemPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DesignSystemRoutingModule {}
