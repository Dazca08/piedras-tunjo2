import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./ver-pictograma/ver-pictograma.module').then(mod => mod.VerPictogramaModule)
  },
  {
    path: 'agregar',
    loadChildren: () => import('./agregar-pic/agregar-pic.module').then(mod => mod.AgregarPicModule)
  },
  {
    path: 'editar/:id',
    loadChildren: () => import('./editar-pic/editar-pic.module').then(mod => mod.EditarPicModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PictogramasRoutingModule { }
