import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./inicio-u/inicio-u.module').then(mod => mod.InicioUModule)
  },
  {
    path: 'deshabilitados',
    loadChildren: () => import('./inicio-ud/inicio-ud.module').then(mod => mod.InicioUdModule)
  },
  {
    path: 'desactivados',
    loadChildren: () => import('./inicio-ucc/inicio-ucc.module').then(mod => mod.InicioUccModule)
  },
  {
    path: 'agregar',
    loadChildren: () => import('./agregar-u/agregar-u.module').then(mod => mod.AgregarUModule)
  },
  {
    path: 'editar/:id',
    loadChildren: () => import('./editar-u/editar-u.module').then(mod => mod.EditarUModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuariosRoutingModule { }
