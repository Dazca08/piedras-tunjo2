import { Component, OnInit } from '@angular/core';
import {Ticket } from 'src/app/interfaces/ticket.interface';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule , FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ServicioTicketService } from 'src/app/services/servicio-ticket.service';
import { element } from 'protractor';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  tickets:Ticket[];  
  ticketes: Ticket ={  	   
    Id:'',
    Nombre:'',
    Precio:'',
    Descripcion:''
  }

  constructor(private router: Router, private ServicioTicket:ServicioTicketService) { }
 
  PageActual:number=1;

  ngOnInit(): void {
    this.ObtenerTickets();

  }

  ObtenerTickets(){
    this.ServicioTicket.ObtenerTicket().subscribe(resultado =>{      
      this.tickets=resultado;                
      console.log("Informacion ya tiene resultado");
      console.log(this.tickets.length)
    },
    error=>{
      console.log(JSON.stringify(error));
   
    }); 
  }

   
  inhabilitar(id){
    console.log(id);
    var inhab = this.ServicioTicket.Habilitar(id,2);   
    /*if (inhab) {
      this.ObtenerTickets();
      this.ngOnInit();
      this.ObtenerTickets();
      //this.router.navigateByUrl('/tickets');
    }       
    */
  }



  /*
  async ObtenerTickets() {
    this.tickets = await this.ServicioTicket.ObtenerTicket();
    
  }
*/

}
