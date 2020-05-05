
import { Injectable, EventEmitter } from '@angular/core';
import { environment } from '../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { PuntoInteres } from '../interfaces/punto-interes.interface';
import { tap } from 'rxjs/operators';
const URL = environment.apiUrl;
@Injectable({
  providedIn: 'root'
})
export class ServiciomapaService {

  constructor( private http: HttpClient) { }



  getPuntosInteres() {
    return this.http.get<PuntoInteres[]>(`${ URL }/puntos-interes`);
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
