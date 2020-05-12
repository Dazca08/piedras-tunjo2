import { Component, OnInit } from '@angular/core';
import {Ticket } from 'src/app/interfaces/ticket.interface';
import { Router } from '@angular/router';
import { ServicioTicketService } from 'src/app/services/servicio-ticket.service';

declare var $: any;

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  tickets: Ticket[];
  ticketes: Ticket = {
    Id: '',
    Nombre: '',
    Precio: '',
    Descripcion: ''
  };

  constructor(private router: Router, private ServicioTicket: ServicioTicketService) { }

  PageActual = 1;

  ngOnInit(): void {
    this.ObtenerTickets();
    // igualar height de las cards de pictogramas
    setTimeout(() => {
      const cards = $('.card-tk');
      let maxHeight = 0;
      cards.each((e) => {
        const height = cards[e].offsetHeight;
        if (height > maxHeight) {
          maxHeight = height;
        }
      });
      cards.each((e) => {
        cards[e].style.height = maxHeight;
      });
    }, 1000);
  }

  ObtenerTickets() {
    this.ServicioTicket.ObtenerTicket().subscribe(resultado => {
      this.tickets = resultado;
      // console.log('Informacion ya tiene resultado');
      // console.log(this.tickets.length);
    },
    error => {
      console.log(JSON.stringify(error));
    });
  }

  inhabilitar(id) {
    console.log(id);
    const inhab = this.ServicioTicket.Habilitar(id, 2);
    this.ObtenerTickets();
    if (inhab) {
      this.ObtenerTickets();
      this.ngOnInit();
    }
  }

}
