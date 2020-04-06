import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { LoginComponent } from './pages/login/login.component';
import { TableroComponent } from './pages/tablero/tablero.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/pages.module').then(mod => mod.PagesModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
