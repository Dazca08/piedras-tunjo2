import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Usuario } from 'src/app/interfaces/usuario.interface';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';
import { catchError, map } from 'rxjs/operators';
import { of } from 'rxjs';

const apiUrl = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private headers: HttpHeaders;

  constructor(
    private http: HttpClient,
    private router: Router,
  ) { }

  prepareHeaders() {
    // obtener token del localStorage
    const token = localStorage.getItem('token') || undefined;
    if (!token) { // undefined
      this.router.navigateByUrl('/login');
      return false;
    } else {
      // construir headers
      this.headers = new HttpHeaders({
        Authorization: 'Bearer ' + token
      });
      return true;
    }
  }

  getUsuarioPendientes(): Promise<Usuario[]> {
    // prepare headers
    const prepare = this.prepareHeaders();
    if (!prepare) {
      console.log('Token not found');
      return Promise.resolve([]);
    }
    return new Promise(resolve => {
      this.http.get(`${ apiUrl }/usuarios`, { headers: this.headers })
                .pipe(
                  catchError(err => of([])),
                  map((res: Usuario[]) => {
                    return res.filter(x => x.VerificacionCuenta === false);
                  })
                )
                .subscribe((res: Usuario[]) => {
                  resolve(res);
                });
    });
  }

  getUsuarioPendiente(id: number): Promise<Usuario> {
    return new Promise(async resolve => {
      const usuarios = await this.getUsuarioPendientes();
      const user = usuarios.find(x => x.Id === id) || undefined;
      resolve(user);
    });
  }

  actualizarUsuario(usuario: Usuario) {
    // prepare headers
    const prepare = this.prepareHeaders();
    if (!prepare) {
      console.log('Token not found');
      return Promise.resolve([]);
    }
    return new Promise(resolve => {
      this.http.put(`${ apiUrl }/usuarios/actualizar/no-verificado`, usuario, { headers: this.headers })
                .pipe(
                  catchError(err => of({ok: false}))
                )
                .subscribe(res => {
                  resolve(res['ok']);
                });
    });
  }
}
