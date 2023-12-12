import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompetenzeComponent } from './competenze.component';

const routes: Routes = [
    {
        path: '',
        component: CompetenzeComponent,
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompetenzeRoutingModule { }
