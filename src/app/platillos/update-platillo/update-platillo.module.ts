import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdatePlatilloPageRoutingModule } from './update-platillo-routing.module';

import { UpdatePlatilloPage } from './update-platillo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdatePlatilloPageRoutingModule
  ],
  declarations: [UpdatePlatilloPage]
})
export class UpdatePlatilloPageModule {}
