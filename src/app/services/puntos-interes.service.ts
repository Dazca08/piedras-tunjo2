import { Injectable, EventEmitter } from '@angular/core';
import { environment } from '../../environments/environment.prod';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { PuntoInteres } from '../interfaces/punto-interes.interface';
import { tap, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { of, Observable } from 'rxjs';

const URL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class PuntosInteresService {

  private token: string;
  private headers: HttpHeaders;
  puntoEliminado$ = new EventEmitter<boolean>();

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

  getPuntosInteres(): Promise<PuntoInteres[]> {
    return new Promise(resolve => {
      this.http.get<PuntoInteres[]>(`${ URL }/puntos-interes`)
                .subscribe(res => {
                  resolve(res);
                });
    });
  }

  async postPuntosInteres(punto: PuntoInteres) {
    const build = await this.buildService();
    if (!build) {
      return Promise.resolve(false);
    }
    return new Promise(resolve => {
      this.http.post(`${ URL }/puntos-interes`, punto, { headers: this.headers })
                .pipe(
                  catchError(err => of({ ok: false }))
                )
                .subscribe(res => {
                  resolve(res['ok']);
                });
    });
  }

  async putPuntosInteres(punto: PuntoInteres) {
    const build = await this.buildService();
    if (!build) {
      return Promise.resolve(false);
    }
    return new Promise(resolve => {
      this.http.put(`${ URL }/puntos-interes/${ punto.Id }`, punto, { headers: this.headers })
                .pipe(
                  catchError(err => of({ ok: false }))
                )
                .subscribe(res => {
                  resolve(res['ok']);
                });
    });
  }

  async deletePuntosInteres(id: number): Promise<boolean> {
    const build = await this.buildService();
    if (!build) { return Promise.resolve(false); }
    return new Promise(resolve => {
      this.http.delete(`${ URL }/puntos-interes/${ id }`, { headers: this.headers })
              .pipe(
                catchError(err => of({ ok: false }))
              )
              .subscribe(res => {
                // this.puntoEliminado$.emit(true);
                resolve(res['ok']);
              });
    });
  }

  existsPunto(lng: number, lat: number): Promise<boolean> {
    return new Promise(async resolve => {
      const puntosInteres = await this.getPuntosInteres();
      setTimeout(() => {
        const punto = puntosInteres.find(x => x.Longitud === lng && x.Latitud === lat);
        resolve(punto !== undefined);
      }, 200);
    });
  }
}
