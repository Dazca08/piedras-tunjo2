import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: 'tablero',
    loadChildren: () => import('./pages/tablero/tablero.module').then(mod => mod.TableroModule)
  },
  {
    path: 'contactanos',
    loadChildren: () => import('./pages/contactanos/contactanos.module').then(mod => mod.ContactanosModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(mod => mod.LoginModule)
  },
  // Guard auth
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(mod => mod.HomeModule),
    canLoad: [AuthGuard],
  },
  {
    path: 'cabanas',
    loadChildren: () => import('./pages/cabana/cabana.module').then(mod => mod.CabanaModule),
    canLoad: [AuthGuard],
  },
  {
    path: 'configuracion',
    loadChildren: () => import('./pages/configuracion/configuracion.module').then(mod => mod.ConfiguracionModule),
    canLoad: [AuthGuard],
  },
  {
    path: 'eventos',
    loadChildren: () => import('./pages/eventos/eventos.module').then(mod => mod.EventosModule),
    canLoad: [AuthGuard],
  },
  {
    path: 'modulo-qr',
    loadChildren: () => import('./pages/modulo-qr/qr.module').then(mod => mod.QrModule),
    canLoad: [AuthGuard],
  },
  {
    path: 'noticias',
    loadChildren: () => import('./pages/noticias/noticias.module').then(mod => mod.NoticiasModule),
    canLoad: [AuthGuard],
  },
  {
    path: 'preguntas-frecuentes',
    loadChildren: () => import('./pages/preguntas-frecuentes/preguntas-frecuentes.module').then(mod => mod.PreguntasFrecuentesModule),
    canLoad: [AuthGuard],
  },
  {
    path: 'promociones',
    loadChildren: () => import('./pages/promociones/promociones.module').then(mod => mod.PromocionesModule),
    canLoad: [AuthGuard],
  },
  {
    path: 'puntos-interes',
    loadChildren: () => import('./pages/puntos-interes/puntos-interes.module').then(mod => mod.PuntosInteresModule),
    canLoad: [AuthGuard],
  },
  {
    path: 'subscripciones',
    loadChildren: () => import('./pages/subscripciones/subscripciones.module').then(mod => mod.SubscripcionesModule),
    canLoad: [AuthGuard],
  },
  {
    path: 'usuarios',
    loadChildren: () => import('./pages/usuarios/usuarios.module').then(mod => mod.UsuariosModule),
    canLoad: [AuthGuard],
  },
   {
    path: 'pqr',
    loadChildren: () => import('./pages/pqr/pqr.module').then(mod => mod.PqrModule),
    canLoad: [AuthGuard],
  },
  {
    path: 'pictogramas',
    loadChildren: () => import('./pages/pictogramas/prueba.module').then(mod => mod.PruebaModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'recorridos',
    loadChildren: () => import('./pages/recorridos/recorridos.module').then(mod => mod.RecorridosModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'tickets',
    loadChildren: () => import('./pages/tickets/tickets.module').then(mod => mod.TicketsModule),
    canLoad: [AuthGuard],
  },


  { path: '', pathMatch: 'full', redirectTo: 'tablero' },
  { path: '**', pathMatch: 'full', redirectTo: 'tablero' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
