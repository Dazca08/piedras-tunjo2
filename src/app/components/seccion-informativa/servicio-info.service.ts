import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../../environments/environment';

const apiUrl = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class ServicioInfoService {

  constructor(private http: HttpClient) { }

  getInformacion() {
    return this.http.get(`${ apiUrl }/informacion`);
  }
  getNoticias(){
  	return this.http.get(`${ apiUrl }/noticias/inicio`);
  }
}
