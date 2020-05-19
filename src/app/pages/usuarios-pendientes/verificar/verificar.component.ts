import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioService } from '../../../services/usuario.service';
import { Usuario } from 'src/app/interfaces/usuario.interface';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-verificar',
  templateUrl: './verificar.component.html',
  styleUrls: ['./verificar.component.css']
})
export class VerificarComponent implements OnInit {

  usuario: Usuario = undefined;
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private usuarioService: UsuarioService
  ) { }

  ngOnInit(): void {
    this.obtenerUsuario();
  }

  obtenerUsuario() {
    const id = this.route.snapshot.paramMap.get('id');
    this.usuarioService.getUsuarioPendiente(Number(id))
                        .then(res => {
                          this.usuario = res;
                          this.form = this.fb.group({
                            NumeroDocumento: [res.NumeroDocumento, Validators.required],
                            LugarExpedicion: [res.LugarExpedicion, Validators.required],
                            FechaNacimiento: [res.FechaNacimiento.split('T')[0], Validators.required],
                          });
                        });
  }

  async onSubmit() {
    const { NumeroDocumento, LugarExpedicion, FechaNacimiento } = this.form.value;
    if (NumeroDocumento.toString().length > 10 || NumeroDocumento.toString().length < 6) {
      Swal.fire(
        'Error',
        'El número de documento no cumple el formato (6-10 digitos)',
        'error'
      );
      return;
    }
    // actualizar objeto usuario
    this.usuario.NumeroDocumento = NumeroDocumento;
    this.usuario.FechaNacimiento = FechaNacimiento;
    this.usuario.LugarExpedicion = LugarExpedicion;
    this.usuario.VerificacionCuenta = true;
    // enviar para actualización
    const updated = await this.usuarioService.actualizarUsuarioNoVerificado(this.usuario);
    if (updated === true) {
      Swal.fire({
        title: 'Bien',
        text: 'Usuario verificado exitosamente',
        icon: 'success'
      });
      this.router.navigateByUrl('/usuarios-pendientes');
    } else {
      Swal.fire({
        title: 'Error',
        text: 'Ha ocurrido un error',
        icon: 'error'
      });
    }
  }

  getValidationClass(nameControl: string) {
    const control = this.form.get(nameControl);
    if (control.untouched && control.pristine) {
      return {};
    }
    return {'is-valid': control.valid, 'is-invalid': control.invalid};
  }

  get numDocumento() {
    return this.form.get('NumeroDocumento');
  }

  get lugarExp() {
    return this.form.get('LugarExpedicion');
  }

  get fechaNac() {
    return this.form.get('FechaNacimiento');
  }

}
