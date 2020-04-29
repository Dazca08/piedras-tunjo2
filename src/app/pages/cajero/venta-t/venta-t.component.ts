import { Component, OnInit } from '@angular/core';
import {VentaTicket } from 'src/app/interfaces/ticket';
import {VentaTicketsServiceService } from 'src/app/services/venta-tickets-service.service';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule , FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
declare var $: any;
@Component({
  selector: 'app-venta-t',
  templateUrl: './venta-t.component.html',
  styleUrls: ['./venta-t.component.css']
})
export class VentaTComponent implements OnInit {
 tickets:VentaTicket[]; 
 ticket:VentaTicket={
 	Id:'',
    FechaCompra:'',
    FechaIngreso:'',
    Precio:'',
    Cantidad:'',
    Qr:'',
    Token:'',
    LastModification:'',
    EstadoId:'',
    idTicket:'',
    UUsuarioId:'',
    UUsuario:''
 }
 bandera:boolean=null;
 titulo:string="Venta de tickets"
 usuarios:any;
 roles:any;
 ticktes:any;
date:any;
  constructor(private router: Router, private ServicioTicket:VentaTicketsServiceService) {    }
 // ngxQrcode2 = "cliente :jose , ticket :defaca , valor:3000";
  //techiediaries = "tickete1";
  //letsboot = 'ikji';
  ngOnInit(): void {
        //this.ObtenerUsuarios();
        this.ObtenerRoles();
        this.ObtenerTickets();
  }
 ObtenerUsuarios(value){
  	this.ServicioTicket.getu().subscribe(resultado =>{

   this.usuarios=resultado;
  this.usuarios=this.usuarios.filter(x=>x.CorreoElectronico==value.UUsuario);
  console.log(this.usuarios);

console.log(value)
 

    this.ticket.FechaCompra=Date.now().toString();
    this.ticket.FechaIngreso=this.ticket.FechaCompra
 this.ticket.UUsuarioId=this.usuarios[0].Id
 this.ticket.UUsuario=this.usuarios[0]
 this.ticket.EstadoId="1";
 this.ticket.LastModification=Date.now().toString();
 this.ticket.idTicket="3"
 this.ticket.Precio=this.ticktes.Precio
 this.ticket.Id="1"
 this.ticket.Token= this.ticket.Id
 value=this.ticket
 console.log(value)
  console.log(this.usuarios.length)
  this.ServicioTicket.insertar(value);
 },
 error=>{
console.log(JSON.stringify(error));

 });
  	return this.usuarios
  }

  ObtenerRoles(){
  	this.ServicioTicket.getRolesUsuario().subscribe(resultado =>{

   this.roles=resultado;
  
  console.log(this.roles);


   console.log("Informacion ya tiene resultado");
  
 },
 error=>{
console.log(JSON.stringify(error));

 });
  }
 ObtenerTickets(){
  	this.ServicioTicket.getTickets().subscribe(resultado =>{

   this.ticktes=resultado;
   
  console.log(this.ticktes);


   console.log("Informacion ya tiene resultado");

 },
 error=>{
console.log(JSON.stringify(error));

 });
  
  }
  DatosClienteRegistrado(){
     if(this.bandera==null){
        this.bandera=true;
        this.titulo="Venta de tickets a clientes registrados"
     }
  }
  DatosClienteNoRegistrado(){
     if(this.bandera==null){
        this.bandera=false;
         this.titulo="Venta de tickets a clientes NO registrados"
     }
  }
  Inicio(){
  	if(this.bandera==false || this.bandera==true){
        this.bandera=null;
         this.titulo="Venta de Tickets "     
     }
  }
RealizarVenta({value}:{value:VentaTicket}){
console.log(value)
this.ObtenerUsuarios(value)

}
}
