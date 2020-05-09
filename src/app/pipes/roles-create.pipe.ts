import { Pipe, PipeTransform } from '@angular/core';
import { Rol } from '../interfaces/rol.interface';

@Pipe({
  name: 'rolesCreate'
})
export class RolesCreatePipe implements PipeTransform {

  transform(roles: Rol[]): unknown {
    return roles.filter(x => x. id > 2);
  }

}
