import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PararPageRoutingModule } from './parar-routing.module';

import { PararPage } from './parar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PararPageRoutingModule
  ],
  declarations: [PararPage]
})
export class PararPageModule {}
