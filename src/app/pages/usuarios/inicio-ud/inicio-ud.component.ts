import { Component, OnInit } from '@angular/core';
import { ServicioUService  } from '../servicio-u.service';
import Swal from 'sweetalert2';
import { Usuario } from 'src/app/interfaces/usuario.interface';

@Component({
  selector: 'app-inicio-ud',
  templateUrl: './inicio-ud.component.html',
  styleUrls: ['./inicio-ud.component.css']
})
export class InicioUdComponent implements OnInit {

  usuarios: Usuario[] = [];
  filterPost = '';
  i: number;
  PageActua = 1;

  constructor(
    private servi: ServicioUService,
  ) { }

  ngOnInit() {
    this.obtenerUsuarios();
  }

  async obtenerUsuarios() {
    this.usuarios = await this.servi.ObtenerDeshabilitados();
  }

  habilitar(id: number) {
    Swal.fire({
      title: 'Esta seguro?',
      text: 'El usuario aparecera ahora como habilitado',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, habilitar!'
      }).then((result) => {
        if (result.value) {
          Swal.fire(
            'habilitado!',
            'El usuario ha sido habilitado.',
            'success'
          );
          this.refrescar(id);
        }
    });
  }

  refrescar(id: number) {
    // console.log(id);
    this.servi.Habilitar(id);
    this.usuarios = this.usuarios.filter(x => x.Id !== id);
  }
}
