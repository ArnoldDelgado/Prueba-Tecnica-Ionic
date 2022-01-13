import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlatilloDetallesPage } from './platillo-detalles.page';

const routes: Routes = [
  {
    path: '',
    component: PlatilloDetallesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlatilloDetallesPageRoutingModule {}
