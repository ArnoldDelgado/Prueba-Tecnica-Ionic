import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlatilloDetallesPageRoutingModule } from './platillo-detalles-routing.module';

import { PlatilloDetallesPage } from './platillo-detalles.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlatilloDetallesPageRoutingModule
  ],
  declarations: [PlatilloDetallesPage]
})
export class PlatilloDetallesPageModule {}
