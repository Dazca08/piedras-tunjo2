import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

const apiUrl = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class ConfiguracionService {

  private headers: HttpHeaders;
  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  prepareHeaders() {
    // obtener token del localStorage
    const token = localStorage.getItem('token') || undefined;
    if (!token) { // undefined
      // if (token === undefined)
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
  
  
  ObtenerTermino(): Promise<any>{
    return new Promise(resolve => {
      this.http.get(`${ apiUrl }/informacion/8`)
                .subscribe(res => resolve(res));
    });
  }
  
  
  
  async update(configuracion: any, id: number): Promise<boolean> {
    // prepare headers
    const prepare = this.prepareHeaders();
    if (!prepare) {
      console.log('Token not found');
      return Promise.resolve(false);
    }

    return new Promise((resolve) => {
      this.http.put(`${ apiUrl }/informacion/Actualizar`, configuracion, { headers: this.headers })
                .pipe(
                  catchError(err => of({ ok: false }))
                )
                .subscribe(res => {
                  resolve(res['ok']);
                });
    });
 }
}
