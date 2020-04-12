import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./inicioc/inicioc.module').then(mod => mod.IniciocModule)
  },
  {
    path: 'editar/:id',
    loadChildren: () => import('./editarc/editarc.module').then(mod => mod.EditarcModule)
  },
  {
    path: 'agregar',
    loadChildren: () => import('./agregarc/agregarc.module').then(mod => mod.AgregarcModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CabanaRoutingModule { }
