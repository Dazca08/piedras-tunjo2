import { Injectable, EventEmitter } from '@angular/core';
import { environment } from '../../../environments/environment.prod';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { PuntoInteres } from '../../interfaces/punto-interes.interface';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { of, Observable } from 'rxjs';

const URL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class PuntosInteresService {

  private token: string;
  private headers: HttpHeaders;

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  async buildService() {
    this.token = localStorage.getItem('token') || undefined;
    if (!this.token) {
      this.router.navigateByUrl('/login');
      return false;
    } else {
      this.headers = new HttpHeaders({
        Authorization: 'Bearer ' + this.token
      });
      return true;
    }
  }

  getPuntosInteres() {
    return this.http.get<PuntoInteres[]>(`${ URL }/puntos-interes`);
  }

  postPuntosInteres(punto: PuntoInteres) {
    this.buildService().then(build => {
      if (!build) { return of({ ok: false }); }
    });
    return this.http.post(`${ URL }/puntos-interes`, punto, { headers: this.headers });
  }

  putPuntosInteres(punto: PuntoInteres) {
    this.buildService().then(build => {
      if (!build) { return of({ ok: false }); }
    });
    return this.http.put(`${ URL }/puntos-interes/${ punto.Id }`, punto, { headers: this.headers });
  }

  async deletePuntosInteres(id: number): Promise<boolean> {
    const build = await this.buildService();
    if (!build) { return Promise.resolve(false); }
    return new Promise(resolve => {
      this.http.delete(`${ URL }/puntos-interes/${ id }`, { headers: this.headers })
              .subscribe(res => {
                resolve(res['ok']);
              });
    });
  }

  existsPunto(lng: number, lat: number): Promise<boolean> {
    return new Promise(resolve => {
      this.getPuntosInteres().subscribe(puntos => {
        const punto = puntos.find(x => x.Longitud === lng && x.Latitud === lat);
        resolve(punto !== undefined);
      });
    });
  }
}
