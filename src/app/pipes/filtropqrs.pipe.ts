import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtropqrs'
})
export class FiltropqrsPipe implements PipeTransform {

  transform(value: any, arg: any): any {
  
     if (arg === '' || arg.length < 3) return value;
    const resultPosts = [];

    for (const post of value) {
      if (post.Pregunta.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
        resultPosts.push(post);
      };
    };
    console.log(resultPosts);
    return resultPosts;
  }
}
