import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { InicioGuard } from './guards/inicio.guard';
import { AdminGuard } from './guards/admin.guard';

const routes: Routes = [
  {
    path: 'tablero',
    canLoad: [ InicioGuard ],
    canActivate: [ InicioGuard ],
    loadChildren: () => import('./pages/tablero/tablero.module').then(mod => mod.TableroModule)
  },
  {
    path: 'contactanos',
    loadChildren: () => import('./pages/contactanos/contactanos.module').then(mod => mod.ContactanosModule)
  },
  {
    path: 'login',
    canLoad: [ InicioGuard ],
    canActivate: [ InicioGuard ],
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
    canLoad: [AuthGuard, AdminGuard],
  },
  {
    path: 'configuracion',
    loadChildren: () => import('./pages/configuracion/configuracion.module').then(mod => mod.ConfiguracionModule),
    canLoad: [AuthGuard, AdminGuard],
  },
  {
    path: 'eventos',
    loadChildren: () => import('./pages/eventos/eventos.module').then(mod => mod.EventosModule),
    canLoad: [AuthGuard, AdminGuard],
  },
  {
    path: 'modulo-qr',
    loadChildren: () => import('./pages/modulo-qr/qr.module').then(mod => mod.QrModule),
    canLoad: [AuthGuard, AdminGuard],
  },
  {
    path: 'noticias',
    loadChildren: () => import('./pages/noticias/noticias.module').then(mod => mod.NoticiasModule),
    canLoad: [AuthGuard, AdminGuard],
  },
  {
    path: 'preguntas-frecuentes',
    loadChildren: () => import('./pages/preguntas-frecuentes/preguntas-frecuentes.module').then(mod => mod.PreguntasFrecuentesModule),
    canLoad: [AuthGuard, AdminGuard],
  },
  {
    path: 'promociones',
    loadChildren: () => import('./pages/promociones/promociones.module').then(mod => mod.PromocionesModule),
    canLoad: [AuthGuard, AdminGuard],
  },
  {
    path: 'puntos-interes',
    loadChildren: () => import('./pages/puntos-interes/puntos-interes.module').then(mod => mod.PuntosInteresModule),
    canLoad: [AuthGuard, AdminGuard],
  },
  {
    path: 'usuarios',
    loadChildren: () => import('./pages/usuarios/usuarios.module').then(mod => mod.UsuariosModule),
    canLoad: [AuthGuard, AdminGuard],
  },
  {
    path: 'usuarios-pendientes',
    loadChildren: () => import('./pages/usuarios-pendientes/usuarios-pendientes.module').then(mod => mod.UsuariosPendientesModule),
    canLoad: [AuthGuard, AdminGuard],
  },
  {
    path: 'pqr',
    loadChildren: () => import('./pages/pqr/pqr.module').then(mod => mod.PqrModule),
    canLoad: [AuthGuard, AdminGuard],
  },
  {
    path: 'pictogramas',
    loadChildren: () => import('./pages/pictogramas/prueba.module').then(mod => mod.PruebaModule),
    canLoad: [AuthGuard, AdminGuard],
  },
  {
    path: 'recorridos',
    loadChildren: () => import('./pages/recorridos/recorridos.module').then(mod => mod.RecorridosModule),
    canLoad: [AuthGuard, AdminGuard],
  },
  {
    path: 'tickets',
    loadChildren: () => import('./pages/tickets/tickets.module').then(mod => mod.TicketsModule),
    canLoad: [AuthGuard, AdminGuard],
  },
  {
    path: 'cajero',
    loadChildren: () => import('./pages/cajero/cajero.module').then(mod => mod.CajeroModule),
    canLoad: [AuthGuard],
  },
  {
    path: 'reportes',
    loadChildren: () => import('./pages/reportes/reportes.module').then(mod => mod.ReportesModule),
    canLoad: [AuthGuard, AdminGuard],
  },
  { path: '', pathMatch: 'full', redirectTo: 'tablero' },
  { path: '**', pathMatch: 'full', redirectTo: 'tablero' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
