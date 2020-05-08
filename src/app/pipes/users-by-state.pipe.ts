import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'usersByState'
})
export class UsersByStatePipe implements PipeTransform {

  transform(usuarios: any[], state: boolean): any[] {
    return usuarios.filter(x => x.EstadoCuenta === state);
  }

}
