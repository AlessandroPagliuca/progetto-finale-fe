import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DipendentiComponent } from './dipendenti.component';

const routes: Routes = [
    {
        path: '',
        component: DipendentiComponent,
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DipendentiRoutingModule { }
