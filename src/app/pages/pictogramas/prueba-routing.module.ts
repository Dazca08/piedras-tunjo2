import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'inicio',
    loadChildren: () => import('./inicio/inicio.module').then(mod => mod.InicioModule)
  },
  {
    path: 'nuevo',
    loadChildren: () => import('./nuevo/nuevo.module').then(mod => mod.NuevoModule)
  },
  {
    path: 'editar/:id',
    loadChildren: () => import('./editar/editar.module').then(mod => mod.EditarModule)
  },
  {
    path: 'mapa',
    loadChildren: () => import('./mapa-picto/mapa-picto.module').then(mod => mod.MapaPictoModule)
  },
  { path: '', pathMatch: '', redirectTo: 'inicio' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PruebaRoutingModule { }
