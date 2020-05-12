import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Usuario } from 'src/app/interfaces/usuario.interface';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';
import { catchError, map } from 'rxjs/operators';
import { of } from 'rxjs';
import { RolesService } from './roles.service';

const apiUrl = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private headers: HttpHeaders;

  constructor(
    private http: HttpClient,
    private rolesService: RolesService,
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

  // usuarios NO pendientes de revisión, ya con la cuenta verificada
  getUsuarios(): Promise<Usuario[]> {
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
                    const aux = res.filter(x => x.VerificacionCuenta === true);
                    const aux2 = [];
                    aux.forEach(async x => {
                      x.Rol = await this.rolesService.getRol(x.RolId);
                      aux2.push(x);
                    });
                    return aux2;
                  })
                )
                .subscribe((res: Usuario[]) => {
                  resolve(res);
                });
    });
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

  getUsuario(id: number, needRol: boolean = true): Promise<Usuario> {
    // prepare headers
    const prepare = this.prepareHeaders();
    if (!prepare) {
      console.log('Token not found');
      return Promise.resolve(undefined);
    }
    return new Promise(resolve => {
      this.http.get(`${ apiUrl }/usuarios/${ id }`, { headers: this.headers })
                .pipe(
                  catchError(err => of(undefined))
                )
                .subscribe(async (res: Usuario) => {
                  if (needRol === true) {
                    res.Rol = await this.rolesService.getRol(res.RolId);
                  }
                  resolve(res);
                });
    });
  }

  agregarUsuario(usuario: Usuario) {
    // prepare headers
    const prepare = this.prepareHeaders();
    if (!prepare) {
      console.log('Token not found');
      return Promise.resolve(false);
    }
    return new Promise(resolve => {
      this.http.post(`${ apiUrl }/usuarios`, usuario, { headers: this.headers })
                .pipe(
                  catchError(err => of({ok: false}))
                )
                .subscribe(res => {
                  resolve(res['ok']);
                });
    });
  }

  actualizarUsuario(usuario: Usuario) {
    // prepare headers
    const prepare = this.prepareHeaders();
    if (!prepare) {
      console.log('Token not found');
      return Promise.resolve(false);
    }
    return new Promise(resolve => {
      this.http.put(`${ apiUrl }/usuarios/${ usuario.Id }`, usuario, { headers: this.headers })
                .pipe(
                  catchError(err => of({ ok: false }))
                )
                .subscribe(res => resolve(res['ok']));
    });
  }

  eliminarUsuario(id: number) {
    // prepare headers
    const prepare = this.prepareHeaders();
    if (!prepare) {
      console.log('Token not found');
      return Promise.resolve(false);
    }
    return new Promise(resolve => {
      this.http.delete(`${ apiUrl }/usuarios/${ id }`, { headers: this.headers })
                .pipe(
                  catchError(err => of({ ok: false }))
                )
                .subscribe(res => resolve(res['ok']));
    });
  }

  actualizarUsuarioNoVerificado(usuario: Usuario) {
    // prepare headers
    const prepare = this.prepareHeaders();
    if (!prepare) {
      console.log('Token not found');
      return Promise.resolve(false);
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

  existeCorreo(correo: string) {
    return new Promise(resolve => {
      this.http.get(`${ apiUrl }/registro/existeCorreo?correo=${ correo }`)
                    .pipe(map(res => res['existe']))
                    .subscribe(res => resolve(res));
    });
  }

  existeNumeroDoc(numeroDoc: string) {
    return new Promise(resolve => {
      this.http.get(`${ apiUrl }/registro/existeNumeroDoc?numeroDoc=${ numeroDoc }`)
              .pipe(map(res => res['existe']))
              .subscribe(res => resolve(res));
    });
  }

  solicitarRecuperacionClave(correo: string, numeroDoc: string) {
    return new Promise(resolve => {
      // tslint:disable-next-line: max-line-length
      this.http.get(`${ apiUrl }/cuenta/recuperar-clave/generar-codigo?correoElectronico=${ correo }&numeroDocumento=${ numeroDoc }`)
                .pipe(
                  catchError(err => of(err.error)) //  {ok: false, message: ''} enviado desde core
                )
                .subscribe(res => resolve(res));
    });
  }

  recuperarClave(codigo: string, nuevaClave: string) {
    return new Promise(resolve => {
      // tslint:disable-next-line: max-line-length
      this.http.get(`${ apiUrl }/cuenta/recuperar-clave/cambiar?codigoVerificacion=${ codigo }&clave=${ nuevaClave }`)
                .pipe(
                  catchError(err => of(err.error)) //  {ok: false, message: ''} enviado desde core
                )
                .subscribe(res => resolve(res));
    });
  }
}
