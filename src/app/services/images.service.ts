import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

const apiUrl = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class ImagesService {

  constructor(
    private http: HttpClient
  ) { }

  imageUpload(file: File, tipo: string) {
    return new Promise(resolve => {
      const formData = new FormData();
      formData.append('image', file);
      this.http.post(`${ apiUrl }/images/uploadImage?tipo=${ tipo }`, formData)
                  .subscribe(res => {
                    resolve(res['ok']);
                  });
    });
  }
}
