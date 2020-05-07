import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { basicAnimate } from '../../animations';
import { routes } from '../../mock-data/rutas';

declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [basicAnimate]
})
export class HomeComponent implements OnInit {
  itemc = {
    title:   'Venta de tickets',
      image: 'registradora.jpg',
      route: '/cajero'
  };

  bandera: any;
  rolUsuario: any;
  rutas = routes;

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    if (this.authService.isAuthenticate) {
      this.bandera = this.authService.isAuthenticate();
      this.rolUsuario = this.authService.idUsuario();
    }
    this.authService.getUsuario().then(res => console.log(res));
  }

}
