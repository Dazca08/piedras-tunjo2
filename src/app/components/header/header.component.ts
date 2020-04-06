import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  // las rutas para usuarios no autetincados
  anonymousRoutes = [
    { label: 'Contactanos', path: '/contactanos' }
  ];

  // rutas para cuando el usuario se haya autenticado
  routes = [
    { label: 'Inicio Admin', path: '/'  },
    { label: 'Usuarios', path: '/iniciou' },
    { label: 'Subscripciones', path: '/ver_subs' },
    { label: 'Pictogramas', path: '/pictogramas' },
    { label: 'QR', path: '/moduloQr' },
    { label: 'Eventos', path: '/inicioeventos' },
    { label: 'Preguntas Frecuentes', path: '/inicioaPf' },
    { label: 'Cabañas', path: '/inicioc' },
    { label: 'Puntos de Interés', path: '/puntos-interes' }
  ];

  constructor(
    public authService: AuthService
  ) { }

  ngOnInit(): void {
  }
}
