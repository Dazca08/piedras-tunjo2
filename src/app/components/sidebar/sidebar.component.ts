import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

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
    { label: 'Panel Admin', path: '/', icon: 'dragon' },
    { label: 'Usuarios', path: '/iniciou', icon: 'users' },
    { label: 'Subscripciones', path: '/ver_subs', icon: 'award' },
    { label: 'Pictogramas', path: '/pictogramas', icon: 'skull' },
    { label: 'QR', path: '/moduloQr', icon: 'qrcode' },
    { label: 'Eventos', path: '/inicioeventos', icon: 'republican' },
    { label: 'Preguntas Frecuentes', path: '/inicioaPf', icon: 'question' },
    { label: 'Cabañas', path: '/inicioc', icon: 'home' },
    { label: 'Puntos de Interés', path: '/puntos-interes', icon: 'map-marker-alt' }
  ];

  constructor(
    public authService: AuthService
  ) { }

  ngOnInit(): void {
  }
}
