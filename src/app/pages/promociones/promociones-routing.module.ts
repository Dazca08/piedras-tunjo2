import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./inicioprom/inicioprom.module').then(mod => mod.IniciopromModule)
  },
  {
    path: 'agregar',
    loadChildren: () => import('./agregarprom/agregarprom.module').then(mod => mod.AgregarpromModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PromocionesRoutingModule { }
