import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ServiciocService {

  private url = 'http://piedrasdeltunjo.tk/cabana';
  headers: HttpHeaders;

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

  ObtenerJson(): Observable<any> {
    // prepare headers
    const prepare = this.prepareHeaders();
    if (!prepare) {
      console.log('Token not found');
      return of([]);
    }
    return this.http.get(this.url, { headers: this.headers });
  }

  getu(id): Observable<any> {
    // prepare headers
    const prepare = this.prepareHeaders();
    if (!prepare) {
      console.log('Token not found');
      return of(undefined);
    }
    return this.http.get(this.url + id, { headers: this.headers });
  }

  async update(cadena, id): Promise<any> {
    // prepare headers
    const prepare = this.prepareHeaders();
    if (!prepare) {
      console.log('Token not found');
      return Promise.resolve(false);
    }
    return new Promise((resolve, reject) => {
      this.http.put(this.url + '/' + id, cadena, { headers: this.headers }).toPromise();
    });
  }

  async Eliminar(id): Promise<any> {
    // prepare headers
    const prepare = this.prepareHeaders();
    if (!prepare) {
      console.log('Token not found');
      return Promise.resolve(false);
    }
    return new Promise((resolve, reject) => {
      this.http.delete(this.url + '/' + id, { headers: this.headers }).toPromise();
    });
  }

  async insertar(Datos): Promise<any> {
    // prepare headers
    const prepare = this.prepareHeaders();
    if (!prepare) {
      console.log('Token not found');
      return Promise.resolve(false);
    }
    return new Promise((resolve, reject) => {
      this.http.post(this.url , Datos, { headers: this.headers }).toPromise();
    });
  }

}
