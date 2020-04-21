import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./inicio-p/inicio-p.module').then(mod => mod.InicioPModule)
  },
  {
    path: 'agregar',
    loadChildren: () => import('./agregar-p/agregar-p.module').then(mod => mod.AgregarPModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PreguntasFrecuentesRoutingModule { }
