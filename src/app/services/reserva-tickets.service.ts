import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { ReservaTicket } from '../interfaces/reserva-ticket.interface';
import { DateService } from './date.service';

const apiUrl = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class ReservaTicketsService {

  private headers: HttpHeaders;

  constructor(
    private http: HttpClient,
    private router: Router,
    private dateService: DateService
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

  getReservasTickets(): Promise<ReservaTicket[]> {
    // prepare headers
    const prepare = this.prepareHeaders();
    if (!prepare) {
      console.log('Token not found');
      return Promise.resolve([]);
    }

    return new Promise(resolve => {
      this.http.get(`${ apiUrl }/reserva-tickets`, { headers: this.headers })
                .pipe(
                  catchError(err => of({ ok: false }))
                )
                .subscribe(res => {
                  resolve(res['ok'] === true ? res['reservas'] : []);
                });
    });
  }

  getDataChart(reservas: ReservaTicket[], year: number): number[] {
    const cantidades = [];
    const meses = this.dateService.meses;
    meses.forEach((x, index) => {
      cantidades.push( this.getTicketsByMonthYear(reservas, (index + 1), Number(year)) );
    });
    // console.log(cantidades);
    return cantidades;
  }

  getTicketsByMonthYear(reservas: ReservaTicket[], mes: number, anio: number) {
    // console.log({
    //   reservas,
    //   mes,
    //   anio
    // });
    const filterReservas = [];
    reservas.forEach(x => {
      const date = x.FechaIngreso.toString().split('T')[0]; // result: 2020-12-12
      const year = Number(date.split('-')[0]); // result: 2020
      const month = Number(date.split('-')[1]); // result: 12
      if (year === anio && month === mes) {
        filterReservas.push(x);
      }
    });
    return filterReservas.length;
  }

}
