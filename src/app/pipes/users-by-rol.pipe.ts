import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'usersByRol'
})
export class UsersByRolPipe implements PipeTransform {

  transform(usuarios: any[], rolId: number): any[] {
    if (rolId === 0) {
      return usuarios;
    }
    return usuarios.filter(x => x.RolId === Number(rolId));
  }

}
