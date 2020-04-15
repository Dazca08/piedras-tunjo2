import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

declare var $: any;
declare var window: any;

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  // las rutas para usuarios no autetincados
  anonymousRoutes = [
    { label: 'Contactanos', path: '/contactanos', icon: 'robot' }
  ];

  // rutas para cuando el usuario se haya autenticado
  routes = [
    { label: 'Usuarios', path: '/usuarios', icon: 'users' },
    { label: 'Subscripciones', path: '/subscripciones', icon: 'award' },
    { label: 'Pictogramas', path: '/pictogramas', icon: 'skull' },
     { label: 'Promociones', path: '/promociones', icon:  'bullhorn'},
    { label: 'QR', path: '/modulo-qr', icon: 'qrcode' },
    { label: 'Eventos', path: '/eventos', icon: 'republican' },
    { label: 'Preguntas Frecuentes', path: '/preguntas-frecuentes', icon: 'question' },
    { label: 'Cabañas', path: '/cabanas', icon: 'home' },
    { label: 'Puntos de Interés', path: '/puntos-interes', icon: 'map-marker-alt' },
    { label: 'Noticias', path: '/noticias', icon: 'newspaper'},
    { label: 'PQR', path: '/pqr', icon: 'question'}
  ];

  constructor(
    public authService: AuthService
  ) { }

  ngOnInit(): void {
  }
}
