import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PararPage } from './parar.page';

const routes: Routes = [
  {
    path: '',
    component: PararPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PararPageRoutingModule {}
