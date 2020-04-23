import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

const httpOptions =
{
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class ServiciopromService {

  private Url: string = "http://piedrasdeltunjo.tk/promocion";


  constructor(private http: HttpClient) { }
  Obtenerpromocion():Observable<any>{
    //return this.http.get(`${this.Url}Subscripcion/Ver_Subscripciones?estadoFiltro=${1}`)
    return this.http.get(this.Url)
 
  }
  

  async insertar(Datos): Promise<any> {
    
      return new Promise((resolve, reject) => {
        this.http.post(this.Url , Datos, httpOptions).toPromise().then(Datos => resolve(Datos),
               error => reject(error))
        
      console.log("aprobado"+resolve);
      console.log("rechazado"+reject);
      });
    }
    async Eliminar(id): Promise<any> {
      return new Promise((resolve, reject) => {
        this.http.delete(this.Url+'/'+id).toPromise()
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
