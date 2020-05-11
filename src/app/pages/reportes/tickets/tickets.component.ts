import { Component, OnInit } from '@angular/core';
import { ReservaTicketsService } from '../../../services/reserva-tickets.service';
import { ReservaTicket } from '../../../interfaces/reserva-ticket.interface';
import * as jsPDF from "jspdf";
import autoTable from 'jspdf-autotable'

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css']
})
export class TicketsComponent implements OnInit {

  reservasTick: ReservaTicket[];
  verGrafica = false;
  selectedMonth = (new Date().getMonth() + 1).toString();
  months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto',
            'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

  constructor(
    private reservasTickService: ReservaTicketsService
  ) { }

  ngOnInit(): void {
    this.prepare();
  }

  async prepare() {
    this.reservasTick = await this.reservasTickService.getReservasTickets();
    console.log(this.reservasTick);
  }
  generarPdft(){
    const pdf = new jsPDF()
    pdf.text(85, 10, "Reporte Tickets");
    autoTable(pdf, { html:  '#tablat' })
    pdf.save('Reporte_Tickets.pdf')
   
  }
  

}
