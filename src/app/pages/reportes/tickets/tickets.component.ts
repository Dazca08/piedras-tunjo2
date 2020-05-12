import { Component, OnInit } from '@angular/core';
import { ReservaTicketsService } from '../../../services/reserva-tickets.service';
import { ReservaTicket } from '../../../interfaces/reserva-ticket.interface';
import * as jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import { DateService } from '../../../services/date.service';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css']
})
export class TicketsComponent implements OnInit {

  reservasTick: ReservaTicket[];
  verGrafica = false;
  selectedMonth = new Date().getMonth() + 1;
  selectedYear = new Date().getFullYear();
  months = [];
  years = [];

  constructor(
    private reservasTickService: ReservaTicketsService,
    private dateService: DateService
  ) { }

  ngOnInit(): void {
    this.months = this.dateService.meses;
    this.years = this.dateService.getYears();
    this.prepare();
  }

  async prepare() {
    this.reservasTick = await this.reservasTickService.getReservasTickets();
  }

  generarPdft() {
    const pdf = new jsPDF();
    pdf.text(85, 10, 'Reporte Tickets');
    autoTable(pdf, { html:  '#tablat' });
    pdf.save('Reporte_Tickets.pdf');
  }

  nameTicket(id: number) {
    return id === 1 ? 'VISITANTE' : (id === 2 ? 'RESIDENTE' : 'NIÑO 5-10 AÑOS');
  }

}
