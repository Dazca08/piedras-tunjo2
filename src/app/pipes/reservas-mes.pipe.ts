import { Pipe, PipeTransform } from '@angular/core';
import { ReservaCabana } from '../interfaces/reserva-cabana.interface';
import { ReservaTicket } from '../interfaces/reserva-ticket.interface';

@Pipe({
  name: 'reservasMes'
})
export class ReservasMesPipe implements PipeTransform {

  transform(reservas: any, mes: any, tipoReserva: string): ReservaCabana[] | ReservaTicket[] {
    const filterReservas = [];
    reservas.forEach(x => {
      let date;
      if (tipoReserva === 'cabana') {
        date = x.FechaReserva.split('T')[0];
      } else if (tipoReserva === 'ticket') {
        date = x.FechaIngreso.split('T')[0];
      }
      const month = Number(date.split('-')[1]);
      if (month === Number(mes)) {
        filterReservas.push(x);
      }
    });
    console.log(filterReservas);
    return filterReservas;
  }

}
