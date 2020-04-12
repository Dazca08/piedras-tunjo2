import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./ver-subscripciones/inicio.module').then(mod => mod.InicioModule)
  },
  {
    path: 'agregar',
    loadChildren: () => import('./insert-subscripciones/insert.module').then(mod => mod.InsertModule)
  },
  {
    path: 'editar/:id',
    loadChildren: () => import('./editar-subscripciones/editar.module').then(mod => mod.EditarModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubscripcionesRoutingModule { }
