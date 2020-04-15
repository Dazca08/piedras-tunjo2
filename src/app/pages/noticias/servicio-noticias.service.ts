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
export class ServicioNoticiasService {
  private Url: string = "http://piedrasdeltunjo.tk/Noticias/";
  //private Url: string = "http://localhost:61629/Noticias/";
  private Url2: string = "http://piedrasdeltunjo.tk/";

  constructor(private http: HttpClient) { }

  Obtener():Observable<any>{
    return this.http.get(this.Url+'noticias')
  }

  async insertar(Datos): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.post(this.Url+"Agregar" , Datos, httpOptions).toPromise().then(Datos => resolve(Datos),
      error => reject(error))
      console.log(resolve);
      console.log(reject);
    });
  }
  public postFileImagen(imagenParaSubir: File){
    const formData = new FormData();
    formData.append('imagenPropia', imagenParaSubir, imagenParaSubir.name);
    return this.http.post(this.Url2 +"images/uploadImage?tipo=noticias", formData);
  }

  getu(id):Observable<any>{
    return this.http.get(this.Url + id, httpOptions)
  }

  async update(cadena,id): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.put(this.Url+id,cadena, httpOptions).toPromise()
    });
  }

  async Eliminar(id): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.get(`${this.Url}eliminarNoticia?id=${id}`).toPromise()
      console.log("Noticia eliminada");
    });
  }

}
