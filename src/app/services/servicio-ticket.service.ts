import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Ticket} from '../interfaces/ticket.interface';
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
  private Url: string = "http://piedrasdeltunjo.tk/GestionTickets/";
  //private Url: string = "http://localhost:61629/GestionTickets/";
  private headers: any;
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

  async Habilitar(id, estado): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.get(`${this.Url}Habilitar?id=${id}&estado=${estado}`).toPromise()
      console.log("Tipo Habilitado Nuevamente");      
    });
  }
  async insertar(Datos): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.post(this.Url , Datos, httpOptions).toPromise().then(Datos => resolve(Datos),
      error => reject(error))      
      console.log(resolve);
      console.log(reject);
    });
  }

  async Eliminar(id): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.delete(this.Url+'Inhabilitar?id='+id).toPromise()
    });
  }
  
  obtenertipo(id):Observable<any>{
    return this.http.get(this.Url + id, httpOptions)
  }

  async actualizar(cadena,id): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.put(this.Url+'Actualizar',cadena, httpOptions).toPromise()
    });
  }

/*
  ObtenerTicket(): Promise<Ticket[]> {
    // prepare headers
    const prepare = this.prepareHeaders();
    if (!prepare) {
      console.log('Token not found');
      return Promise.resolve([]);    
    }
  
    return new Promise(resolve => {
      // Realizar la petición enviando los headers
      
      this.http.get(`${ apiUrl }/GestionTickets/Ver_Tickets?estadoFiltro=1`, { headers: this.headers })
      //this.http.get(`${ this.Url }GestionTickets/Ver_Tickets?estadoFiltro=1`, { headers: this.headers })
                .pipe( // captura el posible error 401 Unauthorize
                  catchError(err => of({ ok: false }))
                )
                .subscribe(res => {
                  if (res['ok'] === true) {
                    resolve(res['tickets']);
                  } else {
                    resolve([]);
                  }
                });
    });
  }
*/

}
