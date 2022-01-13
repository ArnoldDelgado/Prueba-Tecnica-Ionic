import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlatillosPage } from './platillos.page';

const routes: Routes = [
  {
    path: '',
    component: PlatillosPage
  },
  {
    path: 'platillo-detalles',
    loadChildren: () => import('./platillo-detalles/platillo-detalles.module').then( m => m.PlatilloDetallesPageModule)
  },
  {
    path: 'update-platillo',
    loadChildren: () => import('./update-platillo/update-platillo.module').then( m => m.UpdatePlatilloPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlatillosPageRoutingModule {}
