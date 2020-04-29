import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

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

export class VentaTicketsServiceService {
	 constructor( private http: HttpClient,
    private router: Router) { }
  ObtenerJson():Observable<any>{
   	const token = localStorage.getItem('token') || undefined;
   	   const headers = new HttpHeaders({
        Authorization: 'Bearer ' + token
      });
       
    
 return this.http.get(`${ apiUrl }/tickets`, { headers})
  }
  getu(): Observable<any>{
  	const token = localStorage.getItem('token') || undefined;
   	   const headers = new HttpHeaders({
        Authorization: 'Bearer ' + token
      });
    return this.http.get(`${ apiUrl }/Usuarios`, { headers});
  }

  getRolesUsuario(): Observable<any>{
  	const token = localStorage.getItem('token') || undefined;
   	   const headers = new HttpHeaders({
        Authorization: 'Bearer ' + token
      });
    return this.http.get(`${ apiUrl }/Usuarios/RolesUsuario`, { headers});
  }
  getTickets():Observable<any>{
  		const token = localStorage.getItem('token') || undefined;
   	   const headers = new HttpHeaders({
        Authorization: 'Bearer ' + token
      });
    return this.http.get(`${ apiUrl }/tickets`, { headers});
  }
 async insertar(Datos){
    const token = localStorage.getItem('token') || undefined;
        const headers = new HttpHeaders({
        Authorization: 'Bearer ' + token
      });
          return this.http.post(`${ apiUrl }/reserva-tickets/crear`,Datos, {headers}).pipe(catchError(err => {
                    return of( err.error );
                }))
                .subscribe(res => {
                console.log(res);
              this.MensajedeExitoOfracaso(res);
                  
                },
                (err) => { console.log(err)
               
                       console.log(err);
                   this.MensajedeExitoOfracaso(err);
                           },

                   );
  }
  MensajedeExitoOfracaso(ok){

  }
}
