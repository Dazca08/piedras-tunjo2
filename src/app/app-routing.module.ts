import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: 'home',
    canLoad: [AuthGuard],
    loadChildren: () => import('./pages/home/home.module').then(mod => mod.HomeModule)
  },
  {
    path: 'cabanas',
    canLoad: [AuthGuard],
    loadChildren: () => import('./pages/cabana/cabana.module').then(mod => mod.CabanaModule)
  },
  {
    path: 'configuracion',
    canLoad: [AuthGuard],
    loadChildren: () => import('./pages/configuracion/configuracion.module').then(mod => mod.ConfiguracionModule)
  },
  {
    path: 'contactanos',
    loadChildren: () => import('./pages/contactanos/contactanos.module').then(mod => mod.ContactanosModule)
  },
  {
    path: 'eventos',
    canLoad: [AuthGuard],
    loadChildren: () => import('./pages/eventos/eventos.module').then(mod => mod.EventosModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(mod => mod.LoginModule)
  },
  {
    path: 'modulo-qr',
    canLoad: [AuthGuard],
    loadChildren: () => import('./pages/modulo-qr/qr.module').then(mod => mod.QrModule)
  },
  {
    path: 'noticias',
    canLoad: [AuthGuard],
    loadChildren: () => import('./pages/noticias/noticias.module').then(mod => mod.NoticiasModule)
  },
  {
    path: 'pictogramas',
    canLoad: [AuthGuard],
    loadChildren: () => import('./pages/pictogramas/pictogramas.module').then(mod => mod.PictogramasModule)
  },
  {
    path: 'preguntas-frecuentes',
    canLoad: [AuthGuard],
    loadChildren: () => import('./pages/preguntas-frecuentes/preguntas-frecuentes.module').then(mod => mod.PreguntasFrecuentesModule)
  },
  {
    path: 'promociones',
    canLoad: [AuthGuard],
    loadChildren: () => import('./pages/promociones/promociones.module').then(mod => mod.PromocionesModule)
  },
  {
    path: 'puntos-interes',
    canLoad: [AuthGuard],
    loadChildren: () => import('./pages/puntos-interes/puntos-interes.module').then(mod => mod.PuntosInteresModule)
  },
  {
    path: 'subscripciones',
    canLoad: [AuthGuard],
    loadChildren: () => import('./pages/subscripciones/subscripciones.module').then(mod => mod.SubscripcionesModule)
  },
  {
    path: 'tablero',
    loadChildren: () => import('./pages/tablero/tablero.module').then(mod => mod.TableroModule)
  },
  {
    path: 'usuarios',
    canLoad: [AuthGuard],
    loadChildren: () => import('./pages/usuarios/usuarios.module').then(mod => mod.UsuariosModule)
  },
  { path: '', pathMatch: 'full', redirectTo: 'tablero' },
  { path: '**', pathMatch: 'full', redirectTo: 'tablero' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
