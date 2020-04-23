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
    { label: 'Panel Admin', path: '/home', icon: 'dragon' },
    { label: 'Usuarios', path: '/usuarios', icon: 'users' },
    { label: 'Pictogramas', path: '/pictogramas', icon: 'skull' },
    { label: 'Promociones', path: '/promociones', icon:  'bullhorn'},
    { label: 'Recorridos', path: '/recorridos', icon: 'route'},
    { label: 'Eventos', path: '/eventos', icon: 'republican' },
    { label: 'Preguntas Frecuentes', path: '/preguntas-frecuentes', icon: 'question' },
    { label: 'Cabañas', path: '/cabanas', icon: 'home' },
    { label: 'Puntos de Interés', path: '/puntos-interes', icon: 'map-marker-alt' },
    { label: 'Noticias', path: '/noticias', icon: 'newspaper'},
    { label: 'QR', path: '/modulo-qr', icon: 'qrcode' },
    { label: 'PQRS', path: '/pqr', icon: 'question'},    
    { label: 'Gestion Ticket', path: '/tickets', icon: 'ticket-alt'},

  ];

  constructor(
    public authService: AuthService
  ) { }

  ngOnInit(): void {
  }
}
