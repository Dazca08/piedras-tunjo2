import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'arrayFilter'
})
export class ArrayFilterPipe implements PipeTransform {

  transform(array: any[], property: string, value: string): any[] {
    return array.filter(x => x[property].toString().toLowerCase().includes(value.toLowerCase()));
  }

}
