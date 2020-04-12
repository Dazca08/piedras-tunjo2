import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./ver-noticias/ver-noticias.module').then(mod => mod.VerNoticiasModule)
  },
  {
    path: 'agregar',
    loadChildren: () => import('./insert-noticias/insert.module').then(mod => mod.InsertModule)
  },
  {
    path: 'editar/:id',
    loadChildren: () => import('./editar-noticias/editar.module').then(mod => mod.EditarModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NoticiasRoutingModule { }
