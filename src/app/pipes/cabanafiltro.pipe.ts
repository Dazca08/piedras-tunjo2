import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cabanafiltro'
})
export class CabanafiltroPipe implements PipeTransform {

  
  transform(value: any, arg: any): any {
  
    if (arg === '' || arg.length < 3) return value;
   const resultPosts = [];
   for (const post of value) {
     if (post.Nombre.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
       resultPosts.push(post);
     };
   };
   console.log(resultPosts);
   return resultPosts;
 }

}
