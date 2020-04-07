import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { ok } from 'assert';
const httpOptions =
{
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}; 

@Injectable({
  providedIn: 'root'
})
export class ServicioSubService {

  //private Url: string = 'http://piedrasdeltunjo.tk/Subscripcion/';

  private Url: string = "http://localhost:61629/Subscripcion/";
  

  
  constructor(private http: HttpClient) { }
  ObtenerJson():Observable<any>{
    //return this.http.get(`${this.Url}Subscripcion/Ver_Subscripciones?estadoFiltro=${1}`)
    return this.http.get(`${this.Url}Ver_Subscripciones?estadoFiltro=${1}`)
 
  }

  async insertar(Datos): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.post(this.Url+"Registro" , Datos, httpOptions).toPromise()
    });
  }

  async Eliminar(id_subscripcion): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.get(`${this.Url}Remover_Subscripciones?id_subscripcion=${id_subscripcion}`).toPromise()
      console.log("subscripcion eliminada");      
    });
  }


getu(id):Observable<any>{
  return this.http.get(this.Url + id, httpOptions)
  
  }
  async update(cadena,id): Promise<any> {

    return new Promise((resolve, reject) => {
      this.http.put(this.Url+id, cadena, httpOptions).toPromise()
    });
  }
  
}

