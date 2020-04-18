import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import * as uuid from 'uuid';

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

  uploadMultipleImages(files: File[], tipo: string): Promise<string> {
    let imagenesUrl = '';
    const formData = new FormData();
    // Renombramos las imagenes con un uuid
    files.forEach(x => {
      const blob = x.slice(0, x.size, 'image/*');
      const uuidName = uuid.v4() + x.name;
      const newFile = new File([blob], uuidName, {type: 'image/*'});
      // agregar al formData
      formData.append(uuidName, newFile);
      // construir el imagenesUrl que separa las imagenes con un @
      imagenesUrl += uuidName + '@';
    });
    imagenesUrl = imagenesUrl.substring(0, (imagenesUrl.length - 1));

    // subir imagenes al servidor
    return new Promise(resolve => {
      this.http.post(`${ apiUrl }/images/uploadImage?tipo=${ tipo }`, formData)
                .subscribe(res => {
                  resolve( res['ok'] ? imagenesUrl : '' );
                });
    });
  }

  deleteImages(imagenesUrl: string, tipo: string) {
    return new Promise(resolve => {
      this.http.delete(`${ apiUrl }/images/deleteImages?tipo=${ tipo }&imagenesUrl=${ imagenesUrl }`)
                .subscribe(res => {
                  resolve(res['ok']);
                });
    });
  }
}
