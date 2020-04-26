import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Usuario } from '../interfaces/usuario.interface';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import * as jwt_decode from 'jwt-decode';

const apiUrl = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private usuario: Usuario;
  auth$ = new EventEmitter<boolean>();

  constructor(
    private http: HttpClient,
    private router: Router
  ) {
  }

  login(correo: string, clave: string) {
    const body = {
      correoElectronico: correo,
      clave
    };
    Swal.fire({
      title: 'Espere por favor',
      text: 'Cargando información',
      icon: 'info',
      allowOutsideClick: false
    });
    Swal.showLoading();
    this.http.post(`${ apiUrl }/cuenta/iniciaSesion`, body)
                    .pipe(
                      catchError(err => of(err))
                    )
                    .subscribe(res => {
                      if (res['ok'] === true) {
                        // decode
                        const decode = jwt_decode(res['token']);
                        const user = JSON.parse(decode['usuario']);
                        // verificar que sea el administrador
                        if (user['RolId'] === 1) {
                          this.guardarToken(res['token']);
                          this.auth$.emit(true);
                          this.router.navigateByUrl('/home');
                          Swal.close();
                        } else if (user['RolId'] === 3) {
                          this.guardarToken(res['token']);
                          this.auth$.emit(true);
                          this.router.navigateByUrl('/home');
                          Swal.close();
                        } else {
                          this.mostrarAlert('Error', 'No eres un usuario administrador', 'warning');
                        }
                      } else {
                        this.mostrarAlert('Error', 'Correo y/o contraseña incorrectas', 'warning');
                      }
                    });
  }

  validateToken(redirect: boolean = false): Promise<boolean> {
    const token = localStorage.getItem('token') || undefined;
    if (!token) {
      if (redirect) {
        this.router.navigateByUrl('/login');
      }
      return Promise.resolve(false);
    }

    return new Promise(resolve => {
      const headers = new HttpHeaders({
        Authorization: 'Bearer ' + token
      });
      this.http.get(`${ apiUrl }/cuenta/userByToken`, { headers })
                .pipe(
                  catchError(err => of({ ok: false }))
                ).subscribe(res => {
                  if (res['ok'] === true) {
                    this.usuario = res['usuario'];
                    resolve(true);
                  } else {
                    this.usuario = undefined;
                    resolve(false);
                  }
                });
    });
  }

  async guardarToken(token: string) {
    localStorage.clear();
    localStorage.setItem('token', token);
    await this.validateToken();
  }

  async getUsuario() {
    await this.validateToken();
    return { ...this.usuario };
  }

  isAuthenticate() {
    // return await this.validateToken(false);
    return this.usuario?.Id !== undefined;
  }

  idUsuario() {
    return this.usuario.RolId;
  }

  logout() {
    localStorage.clear();
    this.usuario = undefined;
    this.router.navigateByUrl('/tablero');
    this.auth$.emit(false);
  }

  mostrarAlert(title: any, text: any, icon: any) {
    Swal.fire({
      title,
      text,
      icon
    });
  }
}
