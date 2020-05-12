import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { routes } from '../../mock-data/rutas';

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
    { label: 'Contactanos', path: '/contactanos', icon: 'phone-square-alt' }
  ];
   // las rutas para cuando el usuario se haya autenticado y sea el cajero
  cajeroRoutes = [
    { label: 'Venta de tickets', path: '/cajero', icon: 'hand-holding-usd' }
  ];
  // rutas para cuando el usuario se haya autenticado y sea el administrador
  routes = [
    ...routes,
    { label: '', path: '', icon: ''},
    { label: '', path: '', icon: ''}
  ];

  rolUsuario = undefined;

  constructor(
    public authService: AuthService
  ) { }

  ngOnInit(): void {
  }

  async prepare() {
    const user = await this.authService.getUsuario();
    this.rolUsuario = user.RolId;
  }
}
