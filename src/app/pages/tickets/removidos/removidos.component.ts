import { Component, OnInit } from '@angular/core';
import {Ticket } from 'src/app/interfaces/ticket.interface';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule , FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ServicioTicketService } from 'src/app/services/servicio-ticket.service';

@Component({
  selector: 'app-removidos',
  templateUrl: './removidos.component.html',
  styleUrls: ['./removidos.component.css']
})
export class RemovidosComponent implements OnInit {

  tickets:Ticket[];  
  ticketes: Ticket ={  	   
    Id:'',
    Nombre:'',
    Precio:'',
    Descripcion:''
  }

  constructor(private router: Router,private ServicioTicket:ServicioTicketService) {this.ObtenerTicketsRemovidos() }

  PageActual:number=1;

  ngOnInit(): void {
    this.ObtenerTicketsRemovidos();

  }
  
  ObtenerTicketsRemovidos(){
    this.ServicioTicket.ObtenerTicketRemovidos().subscribe(resultado =>{      
      this.tickets=resultado;                
      console.log("Informacion ya tiene resultado");
      console.log(this.tickets.length)
    },
    error=>{
      console.log(JSON.stringify(error));
   
    }); 
  }

  habilitar(id){
    console.log(id);
    var habil  = this.ServicioTicket.Habilitar(id,1);  
    /*if (habil) {
      this.ObtenerTicketsRemovidos();
      this.ngOnInit();
      this.ObtenerTicketsRemovidos();
      //this.router.navigateByUrl('/tickets');
    }   
    */
  }
  
/* 
  habilitar(id){

    Swal.fire({
    title: '¿Esta seguro?',
    text: "¿Realmente quiere habilitar el tipo nuevamente?",
    icon: 'info',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Habilitar!'
  }).then((result) => {
      if (result.value) {
        Swal.fire(

          'Habilitado!',
          'Habilitado Satisfactoriamente....',
          'success'

        )
        this.refrescar(id);
      }
    })
   

  }
*/
 


}
