import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { trigger, transition, animate, style } from '@angular/animations';
import Swal from 'sweetalert2';
import { UsuarioService } from '../../services/usuario.service';
import { Router } from '@angular/router';

declare var $: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations: [
    trigger('loginAnimate', [
      transition(':enter', [ // void => *
        style({ opacity: 0, transform: 'translateX(-200px)' }),
        animate('1s', style({ opacity: 1, transform: 'none'}))
      ])
    ])
  ]
})
export class LoginComponent implements OnInit {
  formLogin: FormGroup;
  recuperaClaveForm: FormGroup;
  email: string;
  password: string;
  seePassword = false;
  codigoVer = '';
  newPass = '';
  loading = false;

  loginView = true;
  recuperarClave = false;
  confirmarCodigo = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private usuarioService: UsuarioService,
    private router: Router
  ) { }

  ngOnInit(): void {
    // login form
    this.formLogin = this.fb.group({
      correo: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      clave: ['', [Validators.required, Validators.minLength(5)]]
    });
    // formulario para recuperar la contraseña
    this.recuperaClaveForm = this.fb.group({
      correo: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      numeroDoc: ['', Validators.required]
    });
  }

  login() {
    const { correo, clave } = this.formLogin.value;
    this.authService.login(correo, clave);
  }

  async sendData() {
    // console.log(this.recuperaClaveForm.value);
    const { correo, numeroDoc } = this.recuperaClaveForm.value;
    if (numeroDoc.toString().length > 10 || numeroDoc.toString().length < 7) {
      this.showErrorAlert('El número de documento no cumple el formato (7-10) digitos');
      return;
    }
    const existeCorreo = await this.usuarioService.existeCorreo(correo);
    if (!existeCorreo) {
      this.showErrorAlert('El correo ingresado no pertenece a ningún usuario');
      return;
    }
    const existeNumeroDoc = await this.usuarioService.existeNumeroDoc(numeroDoc);
    if (!existeNumeroDoc) {
      this.showErrorAlert('El número de documento no pertenece a ningún usuario');
      return;
    }
    // Solicitar recuperación contraseña
    this.loading = true;
    this.usuarioService.solicitarRecuperacionClave(correo, numeroDoc)
                        .then(response => {
                          console.log(response);
                          if (response['ok'] === true) {
                            this.showSuccessAlert(response['message']);
                            this.confirmarCodigo = true;
                            this.recuperarClave = false;
                          } else {
                            if (response['message'].includes('Ya se ha generado')) {
                              this.confirmarCodigo = true;
                              this.recuperarClave = false;
                            }
                            this.showErrorAlert(response['message']);
                          }
                          this.loading = false;
                        });
  }

  async cambiarClave(form: NgForm) {
    const { nuevaClave, codigo } = form.value;
    this.loading = true;
    this.usuarioService.recuperarClave(codigo, nuevaClave)
                        .then(response => {
                          if (response['ok'] === true) {
                            this.showSuccessAlert(response['message']);
                            this.formLogin.reset();
                            this.confirmarCodigo = false;
                            this.loginView = true;
                          } else {
                            this.showErrorAlert(response['message']);
                          }
                          this.loading = false;
                        });
  }

  showSuccessAlert(texto: string) {
    Swal.fire({
      title: 'Bien',
      text: texto,
      icon: 'success'
    });
  }

  showErrorAlert(texto: string) {
    Swal.fire({
      title: 'Error',
      text: texto,
      icon: 'error'
    });
  }

  getValidationClass(nameControl: string) {
    const control = this.formLogin.get(nameControl);
    if (control.untouched && control.pristine) {
      return {};
    }
    return {'is-valid': control.valid, 'is-invalid': control.invalid};
  }

  getValidationClass2(nameControl: string) {
    const control = this.recuperaClaveForm.get(nameControl);
    if (control.untouched && control.pristine) {
      return {};
    }
    return {'is-valid': control.valid, 'is-invalid': control.invalid};
  }

  get correoRec() {
    return this.recuperaClaveForm.get('correo');
  }

  get numDocRec() {
    return this.recuperaClaveForm.get('numeroDoc');
  }

  get correo() {
    return this.formLogin.get('correo');
  }

  get clave() {
    return this.formLogin.get('clave');
  }
}
