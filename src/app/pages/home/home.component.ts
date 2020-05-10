import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { basicAnimate } from '../../animations';
import { routes } from '../../mock-data/rutas';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [basicAnimate]
})
export class HomeComponent implements OnInit {

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
    this.authService.auth$.subscribe(res => {
      if (res === true) {
        console.log('LOGIN !!!!!');
        // OneSignal Subscribe
        const OneSignal = window['OneSignal'] || [];
        OneSignal.setSubscription(true);
      }
    });
  }

}
