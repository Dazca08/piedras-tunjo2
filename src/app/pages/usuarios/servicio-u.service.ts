import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, Subject} from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import Swal from 'sweetalert2';
const httpOptions =
{
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class ServicioUService {

  constructor(private http: HttpClient) { }
private url: string = "http://piedrasdeltunjo.tk/Usuarios";
//private url: string = "http://localhost:61629/Usuarios";
  ObtenerJson():Observable<any>{
    return this.http.get(this.url+'/ver_Usuarios?estadoFiltro=1')
  }
  ObtenerDeshabilitados():Observable<any>{
    return this.http.get(this.url+'/ver_Usuarios?estadoFiltro=2')
  }

getu(id):Observable<any>{
  return this.http.get(this.url + id, httpOptions)
  }
  async update(cadena,id): Promise<any> {

    return new Promise((resolve, reject) => {
      this.http.put(this.url+'/'+id, cadena, httpOptions).toPromise()
    });
  }

async Eliminar(id): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.delete(this.url+'/'+id).toPromise()
      console.log("archvio eliminado");

    });
  }

  async Deshabilitar(id): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.get(`${this.url}/Estado_Usuario?estadoFiltro=1&id_Usuario=${id}`).toPromise()
      console.log('Usuario Deshabilitado');
    });
  }

  async Habilitar(id): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.get(`${this.url}/Estado_Usuario?estadoFiltro=2&id_Usuario=${id}`).toPromise()
      console.log('Usuario Habilitado');
    });
  }


 /* async Deshabilitar(id): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.get(this.url+' /Estado_Usuario?estadoFiltro=1&id_Usuario='+id).toPromise()
      console.log("archivo Deshabilitado");

    });
  }*/


/*async insertar(Datos): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.post(this.url , Datos, httpOptions).toPromise()
    });



  }*/
  funcion(boolean , string  ){
    console.log(string);
   if(boolean==true){
      console.log(boolean)
                      Swal.fire(
  'Usuario agregado con exito!',
  'Usuario   Agregado!',
  'success'
)
   }
   if(boolean==false && string=='Ya existe una cuenta con ese número de documento' ){
      console.log(boolean)
                      Swal.fire(
  'el documento ingresado ya existe !',
  'Usuario no  Agregado!',
  'error'
)
   }
   if(boolean==false && string=='Ya existe una cuenta con ese correo electrónico' ){
      console.log(boolean)
                      Swal.fire(
  'el correo ingresado ya existe !',
  'Usuario no  Agregado!',
  'error'
)
   }
  }
  async insertar(Datos) {

          return this.http.post(this.url , Datos).pipe(catchError(err => {
                    return of( err.error );
                }))
                .subscribe(res => {
                  this.funcion(res.ok ,res.message);
                    //console.log(res.ok);
                },
                (err) => { console.log(err)
                       this.funcion(err.ok , err.message);




  },

            );






  }




}
