import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompetenzeComponent } from './competenze.component';
import { CompetenzeRoutingModule } from './competenze-routing.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    CompetenzeComponent,

  ],
  imports: [
    CommonModule,
    SharedModule,
    CompetenzeRoutingModule,
    
  ]
})
export class CompetenzeModule { }
