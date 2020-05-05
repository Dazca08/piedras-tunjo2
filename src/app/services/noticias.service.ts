import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Noticia } from '../interfaces/noticia.interface';
import { Router } from '@angular/router';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';

const apiUrl = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  private headers: HttpHeaders;

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

  getNoticias(): Promise<Noticia[]> {
    return new Promise(resolve => {
      this.http.get(`${ apiUrl }/noticias`)
                .subscribe(res => {
                  if (res['ok'] === true) {
                    resolve(res['noticias']);
                  } else {
                    resolve([]);
                  }
                });
    });
  }

  getNoticia(id: number): Promise<Noticia> {
    return new Promise(resolve => {
      this.http.get(`${ apiUrl }/noticias/${ id }`)
                .subscribe(res => {
                  if (res['ok'] === true) {
                    resolve(res['noticia']);
                  } else {
                    resolve(undefined);
                  }
                });
    });
  }

  agregarNoticia(noticia: Noticia) {
    // prepare headers
    const prepare = this.prepareHeaders();
    if (!prepare) {
      console.log('Token not found');
      return Promise.resolve([]);
    }
    return new Promise(resolve => {
      this.http.post(`${ apiUrl }/noticias`, noticia, { headers: this.headers })
                .pipe(
                  catchError(err => of({ ok: false }))
                )
                .subscribe(res => {
                  resolve(res['ok']);
                });
    });
  }

  actualizarNoticia(noticia: Noticia) {
    // prepare headers
    const prepare = this.prepareHeaders();
    if (!prepare) {
      console.log('Token not found');
      return Promise.resolve([]);
    }
    return new Promise(resolve => {
      this.http.put(`${ apiUrl }/noticias/${ noticia.id }`, noticia, { headers: this.headers })
                .pipe(
                  catchError(err => of({ ok: false }))
                )
                .subscribe(res => {
                  resolve(res['ok']);
                });
    });
  }

  eliminarNoticia(id: number) {
    // prepare headers
    const prepare = this.prepareHeaders();
    if (!prepare) {
      console.log('Token not found');
      return Promise.resolve([]);
    }
    return new Promise(resolve => {
      this.http.delete(`${ apiUrl }/noticias/${ id }`, { headers: this.headers })
                .pipe(
                  catchError(err => of({ ok: false }))
                )
                .subscribe(res => {
                  resolve(res['ok']);
                });
    });
  }
}
