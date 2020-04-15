import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Pqr} from '../interfaces/pqr.interface';
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
export class ServiciopqrService {
private pqr:Pqr[];
  constructor(  private http: HttpClient,
    private router: Router) { }
   ObtenerJson():Observable<any>{
   	 const token = localStorage.getItem('token') || undefined;
   	   const headers = new HttpHeaders({
        Authorization: 'Bearer ' + token
      });
 return this.http.get(`${ apiUrl }/pqr`, { headers })
  }
  async Eliminar(id): Promise<any> {
  		 const token = localStorage.getItem('token') || undefined;
   	   const headers = new HttpHeaders({
        Authorization: 'Bearer ' + token
      });
    return new Promise((resolve, reject) => {
      this.http.delete(`${ apiUrl }/pqr`+'/'+id , { headers }).toPromise()
    });
  }
    async update(cadena,id): Promise<any> {
     const token = localStorage.getItem('token') || undefined;
   	   const headers = new HttpHeaders({
        Authorization: 'Bearer ' + token
      });
    return new Promise((resolve, reject) => {
      this.http.put(`${ apiUrl }/pqr`+'/'+id ,cadena,  { headers }).toPromise()
    });
  }


}
