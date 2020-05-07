import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'inicio',
    loadChildren: () => import('./inicio/inicio.module').then(mod => mod.InicioModule)
  },
  {
    path: 'agregar',
    loadChildren: () => import('./agregar/agregar.module').then(mod => mod.AgregarModule)
  },
  {
    path: 'editar/:id',
    loadChildren: () => import('./editar/editar.module').then(mod => mod.EditarModule)
  },
  {
    path: 'detalle/:id',
    loadChildren: () => import('./detalle/detalle.module').then(mod => mod.DetalleModule)
  },
  { path: '', pathMatch: 'full', redirectTo: 'inicio' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NoticiasRoutingModule { }
