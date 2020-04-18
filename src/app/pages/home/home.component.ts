import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { basicAnimate } from '../../animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [basicAnimate]
})
export class HomeComponent implements OnInit {

  items = [
    {
      title: 'Usuarios',
      image: 'usuario.jpg',
      route: '/usuarios'
    },
    {
      title: 'Cabañas',
      image: 'cabana.jpg',
      route: '/cabanas'
    },
    {
      title: 'Puntos de interés',
      image: '1.jpg',
      route: '/puntos-interes'
    },
    {
      title: 'Pictogramas',
      image: '7.jpg',
      route: '/pictogramas'
    },
    {
      title: 'Eventos',
      image: '4.jpg',
      route: '/eventos'
    },
    {
      title: 'Promociones',
      image: '7.jpg',
      route: '/promociones'
    },
    {
      title: 'Preguntas frecuentes',
      image: 'pregunta.jpg',
      route: '/preguntas-frecuentes'
    },
    {
      title: 'Gestión de Qr',
      image: 'qr.png',
      route: '/modulo-qr'
    },
    {
      title: 'Configuración',
      image: 'settings.png',
      route: '/configuracion'
    },
  ];

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.authService.getUsuario().then(res => console.log(res));
  }

}
