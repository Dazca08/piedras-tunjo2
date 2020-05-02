import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { trigger, transition, animate, style } from '@angular/animations';

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
  email: string;
  password: string;
  seePassword = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.formLogin = this.fb.group({
      correo: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      clave: ['', [Validators.required, Validators.minLength(5)]]
    });
  }

  login() {
    const { correo, clave } = this.formLogin.value;
    this.authService.login(correo, clave);
  }

  getValidationClass(nameControl: string){
    const control = this.formLogin.get(nameControl);
    if (control.untouched && control.pristine) {
      return {};
    }
    return {'is-valid': control.valid, 'is-invalid': control.invalid};
  }

  get correo() {
    return this.formLogin.get('correo');
  }

  get clave() {
    return this.formLogin.get('clave');
  }
}
