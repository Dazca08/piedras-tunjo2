import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'inicio',
    loadChildren: () => import('./inicio/inicio.module').then(mod => mod.InicioModule)
  },
  {
    path: 'editar/:id',
    loadChildren: () => import('./editar/editar.module').then(mod => mod.EditarModule)
  },
  {
    path: 'agregar',
    loadChildren: () => import('./agregar/agregar.module').then(mod => mod.AgregarModule)
  },
  {
    path: 'detalles/:id',
    loadChildren: () => import('./detalles/detalles.module').then(mod => mod.DetallesModule)
  },
  { path: '', pathMatch: 'full', redirectTo: 'inicio' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuariosRoutingModule { }
