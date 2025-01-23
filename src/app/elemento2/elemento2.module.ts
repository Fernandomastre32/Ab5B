import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Elemento2PageRoutingModule } from './elemento2-routing.module';

import { Elemento2Page } from './elemento2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Elemento2PageRoutingModule
  ],
  declarations: [Elemento2Page]
})
export class Elemento2PageModule {}
