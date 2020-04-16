import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Pictograma } from '../interfaces/pictograma.interface';

const apiUrl = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class PictogramaService {

  constructor(
    private http: HttpClient
  ) { }

  getPictogramas(): Promise<Pictograma[]> {
    return new Promise(resolve => {
      this.http.get(`${ apiUrl }/pictogramas`)
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
    return new Promise(resolve => {
      this.http.post(`${ apiUrl }/pictogramas`, pictogram)
                .subscribe(res => {
                  resolve(res['ok']);
                });
    });
  }

  buscar(id: number): Promise<Pictograma> {
    return new Promise(resolve => {
      this.http.get(`${ apiUrl }/pictogramas/${ id }`)
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
    return new Promise(resolve => {
      this.http.put(`${ apiUrl }/pictogramas/${ pictogram.Id }`, pictogram)
                .subscribe(res => {
                  resolve(res['ok']);
                });
    });
  }

  eliminar(id: number) {
    return new Promise(resolve => {
      this.http.delete(`${ apiUrl }/pictogramas/${ id }`)
                .subscribe(res => {
                  resolve(res['ok']);
                });
    });
  }
}
