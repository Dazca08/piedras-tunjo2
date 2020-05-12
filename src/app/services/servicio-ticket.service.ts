import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Ticket } from '../interfaces/ticket.interface';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { catchError } from 'rxjs/operators';
import * as jwt_decode from 'jwt-decode';
import { Observable, of } from 'rxjs';

const apiUrl = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})

export class ServicioTicketService {
  // private Url = "http://piedrasdeltunjo.tk/GestionTickets/";
  private headers: HttpHeaders;

  constructor(private http: HttpClient, private router: Router) { }

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

  ObtenerTicket(): Observable<any> {
    return this.http.get(apiUrl + '/GestionTickets/Ver_Tickets?estadoFiltro=1');
  }

  ObtenerTicketRemovidos(): Observable<any> {
    return this.http.get(apiUrl + '/GestionTickets/Ver_Tickets?estadoFiltro=2');
  }

  Habilitar(id, estado) {
    // prepare headers
    const prepare = this.prepareHeaders();
    if (!prepare) {
      console.log('Token not found');
      return Promise.resolve([]);
    }
    return new Promise(resolve => {
      this.http.get(`${ apiUrl }/GestionTickets/Habilitar?id=${id}&estado=${estado}`, { headers: this.headers })
                .pipe(
                  catchError(err => of({ ok: false }))
                )
                .subscribe(res => resolve(res['ok']));
    });
  }

  insertar(ticket: Ticket): Promise<boolean> {
    const prepare = this.prepareHeaders();
    if (!prepare) {
      console.log('Token not found');
      return Promise.resolve(false);
    }
    return new Promise(resolve => {
      console.log(ticket);
      this.http.post(`${ apiUrl }/GestionTickets/Agregar`, ticket, { headers: this.headers })
                .pipe(
                  catchError(err => of({ ok: false }))
                )
                .subscribe(res => {
                  console.log(res);
                  resolve(res['ok']);
                });
    });
  }

  obtenertipo(id): Promise<Ticket> {
    const prepare = this.prepareHeaders();
    if (!prepare) {
      console.log('Token not found');
      return Promise.resolve(undefined);
    }
    return new Promise(resolve => {
      this.http.get(`${ apiUrl }/GestionTickets/${ id }`, { headers: this.headers })
                .subscribe(res => {
                  if (res['ok']) {
                    resolve(res['informacion']);
                  } else {
                    resolve(undefined);
                  }
                });
    });
  }

  actualizar(ticket: Ticket) {
    // prepare headers
    const prepare = this.prepareHeaders();
    if (!prepare) {
      console.log('Token not found');
      return Promise.resolve([]);
    }
    return new Promise(resolve => {
      this.http.put(`${ apiUrl }/GestionTickets/${ ticket.Id }`, ticket, { headers: this.headers })
                .pipe(
                  catchError(err => of({ ok: false }))
                )
                .subscribe(res => resolve(res['ok']));
    });
  }

}
