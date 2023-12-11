import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // {
  //   path:'home',
  //   loadChildren:()=> import('./competenze/competenze.module').then(c => c.CompetenzeModule),
  // },
  // {
  //   path:'settings',
  //   loadChildren:()=> import('./dipendenti/dipendenti.module').then(d => d.DipendentiModule),
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
