import { Pipe, PipeTransform } from '@angular/core';
import { environment } from 'src/environments/environment';

@Pipe({
  name: 'imgServer'
})
export class ImgServerPipe implements PipeTransform {
transform(img: string, tipo: string): any {
   const url = `${ environment.apiUrl }/images/getImage?tipo=${ tipo }&nombre=${ img }`;
   return url;
  }

}
