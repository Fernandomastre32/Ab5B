import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Elemento2Page } from './elemento2.page';

const routes: Routes = [
  {
    path: '',
    component: Elemento2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Elemento2PageRoutingModule {}
