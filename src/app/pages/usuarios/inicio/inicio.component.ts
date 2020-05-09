import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../../interfaces/usuario.interface';
import { UsuarioService } from '../../../services/usuario.service';
import { RolesService } from '../../../services/roles.service';
import { Rol } from '../../../interfaces/rol.interface';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  usuarios: Usuario[];
  roles: Rol[] = [];
  idRolSelected = 0;
  estado = true;
  loading = false;

  constructor(
    private usuariosService: UsuarioService,
    public rolService: RolesService
  ) { }

  ngOnInit(): void {
    this.obtenerUsuarios();
  }

  async obtenerUsuarios() {
    this.roles = await this.rolService.getRoles();
    this.usuarios = await this.usuariosService.getUsuarios();
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
    }, 1000);
  }

}
