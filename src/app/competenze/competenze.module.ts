import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompetenzeComponent } from './competenze.component';
import { CompetenzeRoutingModule } from './competenze-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ModaleComponent } from '../modale/modale.component';



@NgModule({
  declarations: [
    CompetenzeComponent,
    ModaleComponent

  ],
  imports: [
    CommonModule,
    SharedModule,
    CompetenzeRoutingModule,

  ]
})
export class CompetenzeModule { }
