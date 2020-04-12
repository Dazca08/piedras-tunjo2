import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./inicio-a/inicio-a.module').then(mod => mod.InicioAModule)
  },
  {
    path: 'agregar',
    loadChildren: () => import('./agregar/agregar.module').then(mod => mod.AgregarModule)
  },
  {
    path: 'editar/:id',
    loadChildren: () => import('./editar/editar.module').then(mod => mod.EditarModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventosRoutingModule { }
