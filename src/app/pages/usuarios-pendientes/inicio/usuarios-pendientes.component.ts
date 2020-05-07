import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../../services/usuario.service';
import { Usuario } from '../../../interfaces/usuario.interface';

@Component({
  selector: 'app-usuarios-pendientes',
  templateUrl: './usuarios-pendientes.component.html',
  styleUrls: ['./usuarios-pendientes.component.css']
})
export class UsuariosPendientesComponent implements OnInit {

  usuariosPendientes: Usuario[];

  constructor(
    private usuarioService: UsuarioService
  ) { }

  ngOnInit(): void {
    this.obtenerUsuarios();
  }

  async obtenerUsuarios() {
    this.usuariosPendientes = await this.usuarioService.getUsuarioPendientes();
    // console.log(this.usuariosPendientes);
  }

}
