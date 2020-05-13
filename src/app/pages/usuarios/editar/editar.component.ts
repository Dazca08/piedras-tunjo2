import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Usuario } from '../../../interfaces/usuario.interface';
import { UsuarioService } from '../../../services/usuario.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Rol } from '../../../interfaces/rol.interface';
import { RolesService } from '../../../services/roles.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  usuario: Usuario;
  roles: Rol[];
  formUsuario: FormGroup;
  avatar = '';
  correoOriginal = '';
  numDocOriginal = '';

  constructor(
    private route: ActivatedRoute,
    private usuarioService: UsuarioService,
    private rolesService: RolesService,
    private router: Router,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.prepare();
  }

  async onSubmit() {
    const {
      Nombre,
      Apellido,
      TipoDocumento,
      NumeroDocumento,
      FechaNacimiento,
      LugarExpedicion,
      CorreoElectronico,
      Clave,
      RolId
    } = this.formUsuario.value;
    // VALIDACIONES
    const numDoc = NumeroDocumento.toString();
    if (numDoc.length > 10 || numDoc.length < 6) {
      this.mostrarMensajeError('El número de documento no cumple (6-10) digitos');
      return;
    }
    const correoExiste = await this.usuarioService.existeCorreo(CorreoElectronico);
    if (correoExiste && CorreoElectronico !== this.correoOriginal) {
      this.mostrarMensajeError('El correo ya está siendo utilizado por otro usuario');
      return;
    }
    const numDocExiste = await this.usuarioService.existeNumeroDoc(NumeroDocumento);
    if (numDocExiste && NumeroDocumento !== this.numDocOriginal) {
      this.mostrarMensajeError('El número de documento está siendo utilizado por otro usuario');
      return;
    }

    // actualizar usuario
    this.usuario.Nombre = Nombre;
    this.usuario.Apellido = Apellido;
    this.usuario.TipoDocumento = TipoDocumento;
    this.usuario.NumeroDocumento = NumeroDocumento;
    this.usuario.FechaNacimiento = FechaNacimiento;
    this.usuario.LugarExpedicion = LugarExpedicion;
    this.usuario.CorreoElectronico = CorreoElectronico;
    this.usuario.Clave = Clave;
    this.usuario.RolId = RolId;
    this.usuario.Icono_url = this.avatar;

    const updated = await this.usuarioService.actualizarUsuario(this.usuario);
    if (updated) {
      Swal.fire({
        title: 'Bien',
        text: 'Usuario actualizado',
        icon: 'success'
      });
      this.router.navigate(['/usuarios', 'detalles', this.usuario.Id]);
    }
  }

  mostrarMensajeError(message: string) {
    Swal.fire({
      title: 'Error',
      text: message,
      icon: 'error'
    });
  }

  async prepare() {
    const id = this.route.snapshot.paramMap.get('id');
    this.roles = await this.rolesService.getRoles();
    this.usuarioService.getUsuario(Number(id))
                        .then(res => {
                          this.usuario = res;
                          this.avatar = res.Icono_url;
                          this.correoOriginal = res.CorreoElectronico;
                          this.numDocOriginal = res.NumeroDocumento;

                          this.formUsuario = this.fb.group({
                            Nombre: [res.Nombre, [Validators.required, Validators.pattern('[a-zA-Z ñÑáéíóúÁÉÍÓÚ\s]+')]],
                            Apellido: [res.Apellido, [Validators.required, Validators.pattern('[a-zA-Z ñÑáéíóúÁÉÍÓÚ\s]+')]],
                            TipoDocumento: [res.TipoDocumento, Validators.required],
                            NumeroDocumento: [res.NumeroDocumento, Validators.required],
                            FechaNacimiento: [res.FechaNacimiento.split('T')[0], Validators.required],
                            LugarExpedicion: [res.LugarExpedicion, Validators.required],
                            CorreoElectronico: [res.CorreoElectronico,
                                        [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
                            Clave: [res.Clave, [Validators.required, Validators.minLength(5)]],
                            RolId: [res.RolId, Validators.required]
                          });
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
