import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { DipendentiComponent } from './dipendenti.component';
import { DipendentiRoutingModule } from './dipendenti-routing.module';



@NgModule({
  declarations: [
    DipendentiComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    DipendentiRoutingModule
  ]
})
export class DipendentiModule { }
