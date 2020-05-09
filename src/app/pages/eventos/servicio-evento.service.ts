import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import Swal from 'sweetalert2';
const httpOptions =
{
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ServicioEventoService {
constructor(private http: HttpClient) { }
 private url: string = "http://piedrasdeltunjo.tk/Eventos";
 private url2: string = "http://piedrasdeltunjo.tk/";
//private url2: string = "http://localhost:61629/";
  ObtenerJson():Observable<any>{
 return this.http.get(this.url)
  }

getu(id):Observable<any>{
  return this.http.get(this.url + id, httpOptions)
  }
  async update(cadena,id): Promise<any> {

    return new Promise((resolve, reject) => {
      this.http.put(this.url+'/'+id,cadena, httpOptions).toPromise()
    });
  }

async Eliminar(id): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.delete(this.url+'/'+id).toPromise()
    });
  }

/*async insertar(Datos): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.post(this.url , Datos, httpOptions).toPromise().then(Datos => resolve(Datos),
             error => reject(error))
              });
  }*/
 MensajedeExitoOfracaso(ok){
   if(ok==true){
       Swal.fire(
         'Evento agregado con exito!',
           'Evento agregado!',
          'success'
                  )

   }
else if(ok==false){

          Swal.fire(
         'Lo sentimos ha ocurrido un error!',
           'Evento no agregado!',
          'error'
                  )
   
}

      
   }

   async insertar(Datos){
          return this.http.post(this.url , Datos).pipe(catchError(err => {
                    return of( err.error );
                }))
                .subscribe(res => {
                console.log(res.ok ,res.message);
                this.MensajedeExitoOfracaso(res.ok)
                    console.log(res);
                },
                (err) => { console.log(err)
                 this.MensajedeExitoOfracaso(err.ok)
                       console.log(err);

  },

            );


  }
    public postFileImagen(imagenParaSubir: File){

    const formData = new FormData(); 
    formData.append('imagenPropia', imagenParaSubir, imagenParaSubir.name); 
    return this.http.post(this.url2 +"images/uploadImage?tipo=evento", formData);

  }


}
