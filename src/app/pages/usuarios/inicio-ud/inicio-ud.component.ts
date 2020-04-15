import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule , FormsModule } from '@angular/forms';
import { Usuarios } from '../usuarios.model';
import { ServicioUService  } from '../servicio-u.service';
import { Router, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-inicio-ud',
  templateUrl: './inicio-ud.component.html',
  styleUrls: ['./inicio-ud.component.css']
})
export class InicioUdComponent implements OnInit {

  usuarios: Usuarios[];
  filterPost = '';
  i: number;
  PageActua = 1;

  constructor(
    private servi: ServicioUService,
  ) { }

  ngOnInit() {
    this.obtenerUsuarios();
  }


  obtenerUsuarios() {
    this.servi.ObtenerDeshabilitados().subscribe(resultado => {
      this.usuarios = resultado;
    });
  }

  habilitar(id: string) {
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

  refrescar(id: string) {
    // console.log(id);
    this.servi.Habilitar(id);
    this.usuarios = this.usuarios.filter(x => x.Id !== id);
  }
}
