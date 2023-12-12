import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: 'competenze',
    loadChildren: () => import('./competenze/competenze.module').then(c => c.CompetenzeModule),
  },
  {
    path: 'dipendenti',
    loadChildren: () => import('./dipendenti/dipendenti.module').then(d => d.DipendentiModule),
  },
  { path: '', pathMatch: 'full', redirectTo: 'competenze' },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
