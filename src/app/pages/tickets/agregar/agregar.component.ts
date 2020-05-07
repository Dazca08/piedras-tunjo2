import { Component, OnInit, ViewChild } from '@angular/core';
import { Ticket } from 'src/app/interfaces/ticket.interface';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule , FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ServicioTicketService } from 'src/app/services/servicio-ticket.service';
import { element } from 'protractor';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  tickets:Ticket[];  
  ticketes: Ticket ={  	   
    Id:'',
    Nombre:'',
    Precio:'',
    Descripcion:'' 
  }
  
  @ViewChild("ticketForm") ticketForm:FormGroup;

  constructor(private router: Router, 
    private ServicioTicket:ServicioTicketService,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  agregar({value, valid}: {value: Ticket, valid: boolean}){
    if(this.ticketes.Precio < "0" || this.ticketes.Descripcion=="" || this.ticketes.Nombre==""){

      Swal.fire(
        'Por favor llene todos los campos!',
        'evento no  Agregado!',
        'error'
      )
    }           
    else{
      this.ServicioTicket.insertar(value)      
      this.refrescar();   
      Swal.fire(
      'Tipo Agregado Satisfactoriamente',
      'Tipo Agregado!',
      'success'
      )
    }    
  }
  
  refrescar(){
    this.ticketes.Nombre = "";
    this.ticketes.Descripcion ="";
    this.ticketes.Precio = "";
  }

}
