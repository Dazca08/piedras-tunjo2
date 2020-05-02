import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import Swal from 'sweetalert2';
const apiUrl = environment.apiUrl;
@Injectable({
  providedIn: 'root'
})
export class ServiciopromService {

 


  constructor(private http: HttpClient) { }
  Obtenerpromocion():Observable<any>{
  const token = localStorage.getItem('token') || undefined;
        const headers = new HttpHeaders({
        Authorization: 'Bearer ' + token
      });
    return this.http.get(`${ apiUrl }/promocion`,{headers})
 
  }

   ObtenerpromocionPorEstado(estado):Observable<any>{
  
    return this.http.get(`${ apiUrl }/promocion/leer?estado=`+estado)
 
  }


  async insertar(Datos){
    const token = localStorage.getItem('token') || undefined;
        const headers = new HttpHeaders({
        Authorization: 'Bearer ' + token
      });
          return this.http.post(`${ apiUrl }/promocion/crear`,Datos , {headers}).pipe(catchError(err => {
                    return of( err.error );
                }))
                .subscribe(res => {
                console.log(res.Message);
              this.MensajedeExitoOfracaso(res.Message);
                  
                },
                (err) => { console.log(err)
               
                       console.log(err.Message);
                   this.MensajedeExitoOfracaso(err.Message);
                           },

                   );
  }

   async Eliminar(id): Promise<any> {
       const token = localStorage.getItem('token') || undefined;
        const headers = new HttpHeaders({
        Authorization: 'Bearer ' + token
      });
    return new Promise((resolve, reject) => {
      this.http.delete(`${ apiUrl }/promocion`+'/'+id , { headers }).toPromise()
    });
  }
 

    CambiarEstado(id):Observable<any>{
  
    return this.http.get(`${ apiUrl }promocion/cambiar_estado?id=`+id)
    }


     async update(cadena): Promise<any> {
   const token = localStorage.getItem('token') || undefined;
        const headers = new HttpHeaders({
        Authorization: 'Bearer ' + token
      });
    return new Promise((resolve, reject) => {
      this.http.put(`${ apiUrl }/promocion/editar`,cadena ,{headers}).pipe(catchError(err => {
                    return of( err.error );
                }))
                .subscribe(res => {
                console.log(res.Message);
                console.log(res.ok)
                this.MensajedeExitoOfracaso(res.ok);
                this.MensajedeExitoOfracaso(res.Message);
                
                  
                },
                (err) => { console.log(err)
               
                       console.log(err.Message);
                       console.log(err.ok);
                       this.MensajedeExitoOfracaso(err.ok);
                this.MensajedeExitoOfracaso(err.Message); 
                         },

                    );
                  });
      }

       getTickets():Observable<any>{
      const token = localStorage.getItem('token') || undefined;
        const headers = new HttpHeaders({
        Authorization: 'Bearer ' + token
      });
    return this.http.get(`${ apiUrl }/tickets`, { headers});
  }




   MensajedeExitoOfracaso(ok){
if(ok=="promocion  agregada"){
       Swal.fire(
         'Promocion agregado con exito!',
           'Promocion agregada!',
          'success'
                  )

   }
else if(ok=="Fecha inicio no valida"){

          Swal.fire(
         'La fecha de inicio es invalida , la fecha debe ser mayor a la fecha actual!',
           'Informacion no guardada!',
          'error'
                  ) 
}
else if(ok=="La fecha fin debe ser despues de la fecha inicio"){

          Swal.fire(
         'La fecha de fin es invalida, la fecha de fin debe estar despues de la fecha de inicio!',
           'Informacion no guardada!',
          'error'
                  ) 
}
else if(ok=="promocion  no agregada, verifique que no exista otra promocion en ese rango de fechas"){

          Swal.fire(
         'La promocion no puede ser agregada porque en ese rango de tiempo ya existe otra promocion!',
           'promocion no agregada!',
          'error'
                  ) 
}
else if(ok=="ocurrio un error"){

          Swal.fire(
         'Lo sentimos ocurrio un error inesperado !',
           'promocion no agregada!',
          'error'
                  ) 
}
else if(ok==true){
     Swal.fire(
         'Promocion actualizada !',
           'Cambios guardados!',
          'success'
                  ) 
}
else if(ok=="No fue posible actualizar"){
     Swal.fire(
         'Ha ocuurido un error inesperado !',
           'Cambios no guardados!',
          'error'
                  ) 
}
else if(ok=="Ya existe una reserva en este rango de fechas"){
    Swal.fire(
         'error no se ha podido actualizar la promocion!',
           'Informacion no guardada!',
          'error'
                  ) 
}



      
   }
}
