import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdatePlatilloPage } from './update-platillo.page';

const routes: Routes = [
  {
    path: '',
    component: UpdatePlatilloPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdatePlatilloPageRoutingModule {}
