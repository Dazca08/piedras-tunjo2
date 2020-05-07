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
const httpOptions =
{
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class ServicioTicketService {
  //private Url: string = "http://piedrasdeltunjo.tk/GestionTickets/";
  private Url: string = "http://localhost:61629/GestionTickets/";
    private headers: HttpHeaders;

  private tickets:Ticket[];


  constructor(private http: HttpClient,private router: Router) { }

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

  ObtenerTicket():Observable<any>{
    return this.http.get(this.Url+'Ver_Tickets?estadoFiltro=1')
  }
  ObtenerTicketRemovidos():Observable<any>{
    return this.http.get(this.Url+'Ver_Tickets?estadoFiltro=2')
  }

  /*
  async Habilitar(id, estado): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.get(`${this.Url}Habilitar?id=${id}&estado=${estado}`).toPromise()
      console.log("Tipo Habilitado Nuevamente");      
    });
  }
  */

  Habilitar(id,estado) {
    // prepare headers
    const prepare = this.prepareHeaders();
    if (!prepare) {
      console.log('Token not found');
      return Promise.resolve([]);
    }
    return new Promise(resolve => {
      this.http.get(`${this.Url}Habilitar?id=${id}&estado=${estado}`, { headers: this.headers })
                .pipe(
                  catchError(err => of({ ok: false }))
                )
                .subscribe(res => resolve(res['ok']));
    });
  }


  /*
  async insertar(Datos): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.post(this.Url , Datos, httpOptions).toPromise().then(Datos => resolve(Datos),
      error => reject(error))      
      console.log(resolve);
      console.log(reject);
    });
  }
  */
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


  
  async Eliminar(id): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.delete(this.Url+'Inhabilitar?id='+id).toPromise()
    });
  }
  
/*
  Eliminar(id) {
    // prepare headers
    const prepare = this.prepareHeaders();
    if (!prepare) {
      console.log('Token not found');
      return Promise.resolve([]);
    }
    return new Promise(resolve => {
      this.http.get(apiUrl+"/GestionTickets/Inhabilitar?id="+ id , { headers: this.headers })
                .pipe(
                  catchError(err => of({ ok: false }))
                )
                .subscribe(res => resolve(res['ok']));
    });
  }
*/


  /*
  obtenertipo(id):Observable<any>{
    return this.http.get(this.Url + id, httpOptions)
  }
  */


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
                    console.log(res['informacion'])
                    resolve(res['informacion']);
                  } else {
                    console.log("no")
                    resolve(undefined);
                  }
                });
    });
  }

/*
  async actualizar(cadena,id): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.put(this.Url+'Actualizar',cadena, httpOptions).toPromise()
    });
  }
*/

 actualizar(ticket: Ticket,id) {
    // prepare headers
    console.log("actualizar");
    console.log(id);
    ticket.Id=id;
    const prepare = this.prepareHeaders();
   // id = ticket.Id;
    if (!prepare) {
      console.log('Token not found');
      return Promise.resolve([]);
    }
    return new Promise(resolve => {
      this.http.put(`${ apiUrl }/GestionTickets/${ id }`, ticket,{ headers: this.headers })
                .pipe(
                  catchError(err => of({ ok: false }))
                )
                .subscribe(res => resolve(res['ok']));
    });
  }

}
