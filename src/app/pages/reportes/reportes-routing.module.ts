import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'inicio',
    loadChildren: () => import('./inicio/inicio.module').then(mod => mod.InicioModule)
  },
  {
    path: 'tickets',
    loadChildren: () => import('./tickets/tickets.module').then(mod => mod.TicketsModule)
  },
  {
    path: 'cabanas',
    loadChildren: () => import('./cabanas/cabanas.module').then(mod => mod.CabanasModule)
  },
  { path: '', pathMatch: 'full', redirectTo: 'inicio' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportesRoutingModule { }
