import { Component, OnInit } from '@angular/core';
import { ServicioUService  } from '../servicio-u.service';
import Swal from 'sweetalert2';
import { Usuario } from 'src/app/interfaces/usuario.interface';

@Component({
  selector: 'app-inicio-ucc',
  templateUrl: './inicio-ucc.component.html',
  styleUrls: ['./inicio-ucc.component.css']
})
export class InicioUccComponent implements OnInit {
  usuarios: Usuario[] = [];
  filterPost = '';
  i: number;
  PageActua = 1;
  constructor(
    private servi: ServicioUService,
  ) { }

  ngOnInit(){
    this.ObtenerUsuario();
  }

  async ObtenerUsuario(){
    this.usuarios = await this.servi.ObtenerDesactivados();
  }

  activar(id: number){

  }
}
