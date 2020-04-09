
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
export class ServiciopicService {

  private Url: string = "http://piedrasdeltunjo.tk/Pictograma/";


  constructor(private http: HttpClient) { }
  ObtenerJson():Observable<any>{
    //return this.http.get(`${this.Url}Subscripcion/Ver_Subscripciones?estadoFiltro=${1}`)
    return this.http.get(`${this.Url}Ver_Pictogramas?estadoFiltro=${1}`)
 
  }
  async Eliminar(id): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.get(`${this.Url}Remover_Pictograma?id_pictograma=${id}`).toPromise()
      console.log("Pictograma eliminado");      
    });
  }

  async insertar(Datos): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.post(this.Url+"Registro" , Datos, httpOptions).toPromise().then(Datos => resolve(Datos),
             error => reject(error))
      
 console.log(resolve);
 console.log(reject);
    });
  }

 

  getu(id):Observable<any>{
    return this.http.get(this.Url + id, httpOptions)
  }
   // `${this.Url}?id=${id}`
  async update(cadena,id): Promise<any> {
  
      return new Promise((resolve, reject) => {
        this.http.put(this.Url+id, cadena, httpOptions).toPromise()
      });
    }






}

