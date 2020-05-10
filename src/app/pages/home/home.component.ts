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

  rolUsuario = undefined;
  rutas = routes;
  bandera = false;

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.prepare();
  }

  async prepare() {
    this.authService.getUsuario().then(user => {
      this.rolUsuario = user.Id;
    });
  }

}
