import { Pipe, PipeTransform } from '@angular/core';
import { ReservaCabana } from 'src/app/interfaces/reserva-cabana.interface';
import { ReservaTicket } from '../interfaces/reserva-ticket.interface';

@Pipe({
  name: 'reservasYear'
})
export class ReservasYearPipe implements PipeTransform {

  transform(reservas: any, anio: any, tipoReserva: string): ReservaCabana[] | ReservaTicket[] {
    const filterReservas = [];
    reservas.forEach(x => {
      let date;
      if (tipoReserva === 'cabana') {
        date = x.FechaReserva.split('T')[0];
      } else if (tipoReserva === 'ticket') {
        date = x.FechaIngreso.split('T')[0];
      }
      const year = Number(date.split('-')[0]);
      if (year === Number(anio)) {
        filterReservas.push(x);
      }
    });
    // console.log(filterReservas);
    return filterReservas;
  }

}
