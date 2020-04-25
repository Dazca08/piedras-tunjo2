import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
 {
    path: '',
    loadChildren: () => import('./venta-t/ventamodule.module').then(mod => mod.VentamoduleModule)
  },

];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CajeroRoutingModule { }
