import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { catchError, map } from 'rxjs/operators';
import { of } from 'rxjs';
import { ReservaCabana } from '../interfaces/reserva-cabana.interface';
import { DateService } from './date.service';
import { UsuarioService } from './usuario.service';

const apiUrl = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class ReservaCabanasService {
  private headers: HttpHeaders;

  constructor(
    private http: HttpClient,
    private router: Router,
    private dateService: DateService,
    private usuarioService: UsuarioService
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

  getReservasCabanas(): Promise<ReservaCabana[]> {
    // prepare headers
    const prepare = this.prepareHeaders();
    if (!prepare) {
      console.log('Token not found');
      return Promise.resolve([]);
    }
    return new Promise(resolve => {
      this.http.get(`${ apiUrl }/reserva-cabanas`, { headers: this.headers })
                .pipe(
                  catchError(err => of({ ok: false }))
                )
                .subscribe(res => {
                  resolve(res['ok'] === true ? res['reservas'] : []);
                });
    });
  }

  getDataChart(reservas: ReservaCabana[], year: number): number[] {
    const cantidades = [];
    const meses = this.dateService.meses;
    // const year = new Date().getFullYear();
    meses.forEach((x, index) => {
      cantidades.push( this.getTicketsByMonth(reservas, (index + 1), Number(year)) );
    });
    // console.log(cantidades);
    return cantidades;
  }

  getTicketsByMonth(reservas: ReservaCabana[], mes: number, anio: number) {
    // console.log({
    //   reservas,
    //   mes,
    //   anio
    // });
    const filterReservas = [];
    reservas.forEach(x => {
      const date = x.FechaReserva.toString().split('T')[0]; // result: 2020-12-12
      const year = Number(date.split('-')[0]); // result: 2020
      const month = Number(date.split('-')[1]); // result: 12
      if (year === anio && month === mes) {
        filterReservas.push(x);
      }
    });
    return filterReservas.length;
  }
}
