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

  activar(user: Usuario){
    Swal.fire({
      title: 'Esta seguro?',
      text: 'El usuario aparecera ahora como Activado',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, Activar!'
      }).then((result) => {
        if (result.value) {
          Swal.fire(
            'Activado!',
            'El usuario ha sido Activado.',
            'success'
          );
          this.refrescar(user);
        }
    });
  }
  refrescar(user: Usuario) {
    // console.log(id);
    this.servi.Activar(user);
    this.usuarios = this.usuarios.filter(x => x.Id !== user.Id);
  }
}
