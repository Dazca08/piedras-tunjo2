import { Component, OnInit } from '@angular/core';
import { ReservaCabanasService } from '../../../services/reserva-cabanas.service';
import { ReservaTicketsService } from '../../../services/reserva-tickets.service';
import { ReservaTicket } from '../../../interfaces/reserva-ticket.interface';
import { ReservaCabana } from 'src/app/interfaces/reserva-cabana.interface';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor(
  ) { }

  ngOnInit(): void { }

}
