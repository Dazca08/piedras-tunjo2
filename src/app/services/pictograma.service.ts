import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Pictograma } from '../interfaces/pictograma.interface';
import { Router } from '@angular/router';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';

const apiUrl = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class PictogramaService {

  private headers: any;

  constructor(
    private http: HttpClient,
    private router: Router
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

  getPictogramas(): Promise<Pictograma[]> {

    // prepare headers
    const prepare = this.prepareHeaders();
    if (!prepare) {
      console.log('Token not found');
      return Promise.resolve([]);
    }

    return new Promise(resolve => {
      // Realizar la petición enviando los headers
      this.http.get(`${ apiUrl }/pictogramas`, { headers: this.headers })
                .pipe( // captura el posible error 401 Unauthorize
                  catchError(err => of({ ok: false }))
                )
                .subscribe(res => {
                  if (res['ok'] === true) {
                    resolve(res['pictogramas']);
                  } else {
                    resolve([]);
                  }
                });
    });
  }

  agregar(pictogram: Pictograma) {
    // prepare headers
    const prepare = this.prepareHeaders();
    if (!prepare) {
      console.log('Token not found');
      return Promise.resolve([]);
    }
    return new Promise(resolve => {
      this.http.post(`${ apiUrl }/pictogramas`, pictogram, { headers: this.headers })
                .pipe(
                  catchError(err => of({ ok: false }))
                )
                .subscribe(res => {
                  resolve(res['ok']);
                });
    });
  }

  buscar(id: number): Promise<Pictograma> {
    // prepare headers
    const prepare = this.prepareHeaders();
    if (!prepare) {
      console.log('Token not found');
      return Promise.resolve(undefined);
    }
    return new Promise(resolve => {
      this.http.get(`${ apiUrl }/pictogramas/${ id }`, { headers: this.headers })
                .pipe(
                  catchError(err => of({ok: false}))
                )
                .subscribe(res => {
                  if (res['ok'] === true) {
                    resolve(res['pictograma']);
                  } else {
                    resolve(undefined);
                  }
                });
    });
  }

  actualizar(pictogram: Pictograma) {
    // prepare headers
    const prepare = this.prepareHeaders();
    if (!prepare) {
      console.log('Token not found');
      return Promise.resolve(false);
    }
    return new Promise(resolve => {
      this.http.put(`${ apiUrl }/pictogramas/${ pictogram.Id }`, pictogram, { headers: this.headers })
                .pipe(
                  catchError(err => of({ok: false}))
                )
                .subscribe(res => {
                  resolve(res['ok']);
                });
    });
  }

  eliminar(id: number) {
    // prepare headers
    const prepare = this.prepareHeaders();
    if (!prepare) {
      console.log('Token not found');
      return Promise.resolve(false);
    }
    return new Promise(resolve => {
      this.http.delete(`${ apiUrl }/pictogramas/${ id }`, { headers: this.headers })
                .pipe(
                  catchError(err => of({ ok: false }))
                )
                .subscribe(res => {
                  resolve(res['ok']);
                });
    });
  }
}
