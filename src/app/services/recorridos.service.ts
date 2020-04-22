import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { Recorrido } from '../interfaces/recorrido.interface';

const apiUrl = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class RecorridosService {

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

  getRecorridos(): Promise<Recorrido[]> {
    // prepare headers
    const prepare = this.prepareHeaders();
    if (!prepare) {
      console.log('Token not found');
      return Promise.resolve([]);
    }
    return new Promise(resolve => {
      this.http.get(`${ apiUrl }/recorridos`)
              .pipe(
                catchError(err => of({ok: false}))
              )
              .subscribe(res => {
                if (res['ok'] === true) {
                  resolve(res['recorridos']);
                } else {
                  resolve([]);
                }
              });
    });
  }


  nuevoRecorrido(recorrido: Recorrido) {
    return new Promise(resolve => {
      this.http.post(`${ apiUrl }/recorridos`, recorrido)
                .pipe(
                  catchError(err => of({ok: false}))
                )
                .subscribe(res => {
                  resolve(res['ok']);
                });
    });
  }

  eliminarRecorrido(id: number) {
    return new Promise(resolve => {
      this.http.delete(`${ apiUrl }/${ id }`)
                .pipe(
                  catchError(err => of({ok: false}))
                )
                .subscribe(res => {
                  resolve(res['ok']);
                });
    });
  }
}
