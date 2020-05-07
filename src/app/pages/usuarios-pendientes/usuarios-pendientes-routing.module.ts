import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'inicio',
    loadChildren: () => import('./inicio/inicio.module').then(mod => mod.InicioModule)
  },
  {
    path: 'verificar/:id',
    loadChildren: () => import('./verificar/verificar.module').then(mod => mod.VerificarModule)
  },
  { path: '', pathMatch: 'full', redirectTo: 'inicio' }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuariosPendientesRoutingModule { }
