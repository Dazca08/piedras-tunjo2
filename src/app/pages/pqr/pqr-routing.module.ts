import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
 {
    path: '',
    loadChildren: () => import('./listar/listar.module').then(mod => mod.ListarModule)
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PqrRoutingModule { }
