import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { DipendentiComponent } from './dipendenti.component';



@NgModule({
  declarations: [
    DipendentiComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class DipendentiModule { }
