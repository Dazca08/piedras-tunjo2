import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RolesService } from '../../../services/roles.service';
import { Rol } from '../../../interfaces/rol.interface';
import { Usuario } from '../../../interfaces/usuario.interface';
import Swal from 'sweetalert2';
import { UsuarioService } from '../../../services/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  formUsuario: FormGroup;
  roles: Rol[] = [];
  avatar = 'av-1.png';

  constructor(
    private fb: FormBuilder,
    private rolService: RolesService,
    private usuarioService: UsuarioService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.prepareForm();
  }

  async onSubmit() {
    const usuario: Usuario = {
      ... this.formUsuario.value,
      Icono_url: this.avatar,
      VerificacionCuenta: true,
      EstadoCuenta: true,
      Imagen_documento: null
    };
    // console.log(usuario);
    // VALIDACIONES
    const numDoc = usuario.NumeroDocumento.toString();
    if (numDoc.length > 10 || numDoc.length < 6) {
      this.mostrarMensajeError('El número de documento no cumple (6-10) digitos');
      return;
    }
    const correoExiste = await this.usuarioService.existeCorreo(usuario.CorreoElectronico);
    if (correoExiste) {
      this.mostrarMensajeError('El correo ya está siendo utilizado por otro usuario');
      return;
    }
    const numDocExiste = await this.usuarioService.existeNumeroDoc(usuario.NumeroDocumento);
    if (numDocExiste) {
      this.mostrarMensajeError('El número de documento ya está siendo utilizado por otro usuario');
      return;
    }

    // almacenar nuevo usuario
    const created = await this.usuarioService.agregarUsuario(usuario);
    if (created) {
      Swal.fire({
        title: 'Bien',
        text: 'Usuario agregado',
        icon: 'success'
      });
      this.router.navigateByUrl('/usuarios');
    }
  }

  mostrarMensajeError(message: string) {
    Swal.fire({
      title: 'Error',
      text: message,
      icon: 'error'
    });
  }

  async prepareForm() {
    this.roles = await this.rolService.getRoles();
    this.formUsuario = this.fb.group({
      Nombre: ['', [Validators.required, Validators.pattern('[a-zA-Z ñÑáéíóúÁÉÍÓÚ\s]+')]],
      Apellido: ['', [Validators.required, Validators.pattern('[a-zA-Z ñÑáéíóúÁÉÍÓÚ\s]+')]],
      TipoDocumento: ['TI', Validators.required],
      NumeroDocumento: [0, Validators.required],
      FechaNacimiento: ['2020-01-01', Validators.required],
      LugarExpedicion: ['', Validators.required],
      CorreoElectronico: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      Clave: ['', [Validators.required, Validators.minLength(5)]],
      RolId: [3, Validators.required]
    });
  }

  // getters
  get nombre() {
    return this.formUsuario.get('Nombre');
  }
  get apellido() {
    return this.formUsuario.get('Apellido');
  }
  get tipoDoc() {
    return this.formUsuario.get('TipoDocumento');
  }
  get numeroDoc() {
    return this.formUsuario.get('NumeroDocumento');
  }
  get fechaNac() {
    return this.formUsuario.get('FechaNacimiento');
  }
  get lugarExp() {
    return this.formUsuario.get('LugarExpedicion');
  }
  get correo() {
    return this.formUsuario.get('CorreoElectronico');
  }
  get clave() {
    return this.formUsuario.get('Clave');
  }
  get rolId() {
    return this.formUsuario.get('RolId');
  }

  getValidationClass(nameControl: string) {
    const control = this.formUsuario.get(nameControl);
    if (control.untouched && control.pristine) {
      return {};
    }
    return {'is-valid': control.valid, 'is-invalid': control.invalid};
  }

}
