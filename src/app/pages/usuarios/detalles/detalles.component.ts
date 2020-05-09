import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/interfaces/usuario.interface';
import { ActivatedRoute } from '@angular/router';
import { UsuarioService } from '../../../services/usuario.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css']
})
export class DetallesComponent implements OnInit {

  usuario: Usuario;

  constructor(
    private route: ActivatedRoute,
    private usuarioService: UsuarioService
  ) { }

  ngOnInit(): void {
    this.prepare();
  }

  async prepare() {
    const id = this.route.snapshot.paramMap.get('id');
    this.usuario = await this.usuarioService.getUsuario(Number(id));
  }

  showConfirmAlert() {
    Swal.fire({
      title: 'Confimación',
      text: '¿Estás seguro?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      // confirmButtonText: 'Yes, delete it!'
    }).then(async (result) => {
      if (result.value) {
        // cambiar de estado
        this.usuario.EstadoCuenta = !this.usuario.EstadoCuenta;
        const updated = await this.usuarioService.actualizarUsuario(this.usuario);
        if (updated) {
          Swal.fire(
            'Actualizado!',
            'Usuario ha cambiado de estado',
            'success'
          );
        }
      }
    });
  }

}
