import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { basicAnimate } from '../../animations';
import { routes } from '../../mock-data/rutas';
import { Router, ActivatedRoute } from '@angular/router';

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
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const state = this.route.snapshot.queryParamMap.get('state');
    if (state !== null) {
      this.router.navigateByUrl('/contactanos', { skipLocationChange: true }).then(() => {
        this.router.navigate(['/home']);
      });
    }
    this.prepare();
  }

  async prepare() {
    const user = await this.authService.getUsuario();
    this.rolUsuario = user.RolId;
  }

}
