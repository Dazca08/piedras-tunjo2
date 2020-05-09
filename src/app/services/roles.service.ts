import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Rol } from '../interfaces/rol.interface';

const apiUrl = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class RolesService {

  constructor(
    private http: HttpClient
  ) { }

  getRoles(): Promise<Rol[]> {
    return new Promise(resolve => {
      this.http.get(`${ apiUrl }/roles`)
              .subscribe(res => {
                resolve((res['ok'] === true) ? res['roles'] : []);
              });
    });
  }

  getRol(id: number): Promise<Rol> {
    return new Promise(resolve => {
      this.http.get(`${ apiUrl }/roles/${ id }`)
              .subscribe(res => {
                resolve((res['ok'] === true) ? res['rol'] : undefined);
              });
    });
  }

}
