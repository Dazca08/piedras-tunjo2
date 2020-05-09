import { Pipe, PipeTransform } from '@angular/core';
import { Usuario } from '../interfaces/usuario.interface';

@Pipe({
  name: 'numDocFilter'
})
export class NumDocFilterPipe implements PipeTransform {

  transform(users: Usuario[], numDoc: string): Usuario[] {
    return users.filter(x => x.NumeroDocumento.includes(numDoc));
  }

}
