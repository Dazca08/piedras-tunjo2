import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RemovidosModule } from './removidos/removidos.module';
import { AgregarModule } from './agregar/agregar.module';
import { EditarModule } from './editar/editar.module';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./inicio/inicio.module').then(mod => mod.InicioModule)
  },
  {
    path: 'removidos',
    loadChildren: () => import('./removidos/removidos.module').then(mod => mod.RemovidosModule)
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
export class TicketsRoutingModule { }


