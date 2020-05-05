import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { Cabana } from '../interfaces/cabana.interface';

const apiUrl = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class CabanasService {

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

  getCabanas(): Promise<Cabana[]> {
    // prepare headers
    const prepare = this.prepareHeaders();
    if (!prepare) {
      console.log('Token not found');
      return Promise.resolve([]);
    }

    return new Promise(resolve => {
      this.http.get(`${ apiUrl }/cabana`, { headers: this.headers })
                .pipe(
                  catchError(err => of([]))
                )
                .subscribe((res: Cabana[]) => resolve(res || []));
    });
  }

  getCabana(id: number): Promise<Cabana> {
    const prepare = this.prepareHeaders();
    if (!prepare) {
      console.log('Token not found');
      return Promise.resolve(undefined);
    }
    return new Promise(resolve => {
      this.http.get(`${ apiUrl }/cabana/${ id }`, { headers: this.headers })
                .subscribe(res => {
                  if (res['ok']) {
                    resolve(res['cabana']);
                  } else {
                    resolve(undefined);
                  }
                });
    });
  }

  agregar(cabana: Cabana): Promise<boolean> {
    const prepare = this.prepareHeaders();
    if (!prepare) {
      console.log('Token not found');
      return Promise.resolve(false);
    }
    return new Promise(resolve => {
      this.http.post(`${ apiUrl }/cabana`, cabana, { headers: this.headers })
                .pipe(
                  catchError(err => of({ ok: false }))
                )
                .subscribe(res => {
                  console.log(res);
                  resolve(res['ok']);
                });
    });
  }

  update(cabana: Cabana, id: number) {
    // prepare headers
    const prepare = this.prepareHeaders();
    if (!prepare) {
      console.log('Token not found');
      return Promise.resolve([]);
    }
    return new Promise(resolve => {
      this.http.put(`${ apiUrl }/cabana/${ id }`, cabana, { headers: this.headers })
                .pipe(
                  catchError(err => of({ ok: false }))
                )
                .subscribe(res => resolve(res['ok']));
    });
  }

  eliminar(id: number) {
    // prepare headers
    const prepare = this.prepareHeaders();
    if (!prepare) {
      console.log('Token not found');
      return Promise.resolve([]);
    }
    return new Promise(resolve => {
      this.http.delete(`${ apiUrl }/cabana/${ id }`, { headers: this.headers })
                .pipe(
                  catchError(err => of({ ok: false }))
                )
                .subscribe(res => resolve(res['ok']));
    });
  }
}
