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
 itemc={
    title:   'Venta de tickets',
      image: 'registradora.jpg',
      route: '/cajero'
 }

 bandera:any;
 rolUsuario:any;
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
      title: 'Recorridos',
      image: 'recorridos.jpg',
      route: '/recorridos'
    },
    {
      title: 'Eventos',
      image: '4.jpg',
      route: '/eventos'
    },
    {
      title: 'Promociones',
      image: 'promo.jpg',
      route: '/promociones'
    },
    {
      title: 'Preguntas frecuentes',
      image: 'PF.jpg',
      route: '/preguntas-frecuentes'
    },
    {
    title:   'Venta de tickets',
      image: 'registradora.jpg',
      route: '/cajero'
    },
    {
      title: 'Configuración',
      image: 'settings.png',
      route: '/configuracion'
    },
    {
      title: 'PQRS',
      image: 'pregunta.jpg',
      route: '/pqr'
    },
    {
      title: 'Noticias',
      image: 'noti.jpg',
      route: '/noticias'
    },
  ];

  constructor(
    private authService: AuthService
  ) { }
  
  ngOnInit(): void {
    if(this.authService.isAuthenticate){
    this.bandera=this.authService.isAuthenticate();
    this.rolUsuario=this.authService.idUsuario();
  }

    this.authService.getUsuario().then(res => console.log(res));
  }

}
