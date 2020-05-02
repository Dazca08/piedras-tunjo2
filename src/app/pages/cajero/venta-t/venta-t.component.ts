import { Component, OnInit } from '@angular/core';
import {VentaTicket } from 'src/app/interfaces/ticket';
import { AuthService } from 'src/app/services/auth.service';
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
    Cantidad:0,
    Qr:'',
    Token:'',
    LastModification:'',
    EstadoId:'',
    idTicket:0,
    NumeroDocumento:0,
    UUsuarioId:0,
    UUsuario:''
 }
 ticketVacio={
     Id:'',
    FechaCompra:'',
    FechaIngreso:'',
    Precio:'',
    Cantidad:0,
    Qr:'',
    Token:'',
    LastModification:'',
    EstadoId:'',
    idTicket:0,
    NumeroDocumento:0,
    UUsuarioId:0,
    UUsuario:''
 }
 bandera:boolean=null;
 titulo:string="Venta de tickets"
 usuarios:any;
 roles:any;
 ticktes:any;
date:any;
k:any;


  ;
  constructor(private router: Router, private ServicioTicket:VentaTicketsServiceService ,private authService: AuthService) {    }
 // ngxQrcode2 = "10732538042";
  //techiediaries = "tickete1";
  //letsboot = 'ikji';
  ngOnInit(): void {
        //this.ObtenerUsuarios();
        //  this.ObtenerRoles();
        this.ObtenerTickets();
      
  }
 ObtenerUsuarioCajero(){
  
  this.authService.getUsuario().then(res => 

      this.ServicioTicket.getu().subscribe(resultado =>{
    this.k=resultado;
    this.k=this.k.filter(x=>x.Id==res.Id);
    console.log(this.k)
    console.log(this.ticket)
  this.ticket.FechaCompra=Date.now().toString();
    this.ticket.FechaIngreso=this.ticket.FechaCompra
 
 this.ticket.EstadoId="1";
 this.ticket.LastModification=Date.now().toString();


 this.ticket.UUsuarioId=this.k[0].Id
 this.ticket.UUsuario=" "
  var preciotemp=this.ticktes[this.ticket.idTicket].Precio*this.ticket.Cantidad
 this.ticket.Precio=preciotemp.toString()
  this.ticket.Token= this.ticket.idTicket.toString()
  var ticketee=this.ticket.toString();
 this.ticket.Qr=ticketee;
  //this.ticket.Qr="1073253903"
  //this.ticket.UUsuario.NumeroDocumento="1073253903"
 
 console.log("ticket antes de enviar")
 console.log(this.ticket)
 this.ServicioTicket.insertar(this.ticket);
this.refrescar();

  })
      
     
     );
  
  
  //console.log("UUsuario")
 
    
 }
 ObtenerUsuarios(value){
  	this.ServicioTicket.getu().subscribe(resultado =>{
console.log(value.UUsuario)
   this.usuarios=resultado;
  this.usuarios=this.usuarios.filter(x=>x.CorreoElectronico==value.UUsuario);
  console.log(this.usuarios);
if(this.usuarios.length==0){
     Swal.fire(
            'El correo no existe entre los usuarios registrados!',
            'venta no realizada!',
            'error'
                     )
}
else{
  console.log("ticket en obtener usuarios al inicio del else")
  console.log(this.ticket)
  this.ticket.FechaCompra=Date.now().toString();
    this.ticket.FechaIngreso=this.ticket.FechaCompra
 this.ticket.UUsuarioId=this.usuarios[0].Id
 //this.ticket.UUsuario=this.usuarios[0]
 this.ticket.EstadoId="1";
 this.ticket.LastModification=Date.now().toString();
 //this.ticket.idTicket="3"
 // var id=parseInt(this.ticket.idTicket,10)

  var cantidad=parseInt(value.Cantidad,10)
  this.ticket.Cantidad=value.Cantidad;
 this.ticket.idTicket=value.idTicket;
  var preciotemp=this.ticktes[value.idTicket].Precio*cantidad
 this.ticket.Precio=preciotemp.toString()
// id=id+1;
// this.ticket.idTicket=id.toString();
// this.ticket.Id="1"
 this.ticket.Token= this.ticket.idTicket.toString()
 
//this.ticket.NumeroDocumento=this.usuarios[0].NumeroDocumento
 this.ticket.NumeroDocumento=this.usuarios[0].NumeroDocumento
 this.ticket.UUsuario=""
 this.ticket.Qr=this.ticket.toString()
 console.log("ticket en obtener usuarios con valor que se le va a pasar a value")
  console.log(this.ticket)
 value=this.ticket
 console.log(this.usuarios)
 console.log(value)
  //console.log(this.usuarios.length)
this.ServicioTicket.insertar(value);
 this.refrescar();
}

console.log(value)
 
//this.refrescar();
    
 },
 error=>{
console.log(JSON.stringify(error));

 });
  

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
  for(var i =0;i<this.ticktes.length;i++){
     this.ticktes[i].Id=this.ticktes[i].Id-1;

   }
   console.log(this.ticktes);
 // var id=parseInt(this.ticket.idTicket,10)
  //var cantidad=parseInt(this.ticket.Cantidad,10)

 // this.k=this.ticktes[id-1].Precio*cantidad



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
        this.refrescar();
     }
  }
  DatosClienteNoRegistrado(){
     if(this.bandera==null){
        this.bandera=false;
         this.titulo="Venta de tickets a clientes NO registrados"
         this.refrescar();
     }
  }
  Inicio(){
  	if(this.bandera==false || this.bandera==true){
        this.bandera=null;
         this.titulo="Venta de Tickets "
         this.refrescar();     
     }
  }
RealizarVenta({value}:{value:VentaTicket}){
console.log(value)
console.log("ticket cuando ingresa al realizar venta")
  console.log(this.ticket)
if( this.bandera==true && value.UUsuario==""){
 Swal.fire(
            'Por favor llene todos los campos!',
            'venta no realizada!',
            'error'
                     )
}
else if(this.bandera==true && value.UUsuario.length<5){
      Swal.fire(
            'El correo debe contener al menos 5 caracteres para ser valido!',
            'venta no realizada!',
            'error'
                     )
}
else if(this.bandera==false && value.NumeroDocumento==0 || value.NumeroDocumento<1000000000){
     Swal.fire(
            'El numero de documento no puede estar vacio y debe contener 10 digitos!',
            'venta no realizada!',
            'error'
                     )
}

else if(value.Cantidad>10){
   Swal.fire(
            'La cantidad maxima de tickets que puede comprar un usuario es 10!',
            'venta no realizada!',
            'error'
                     )
}
else if(value.Cantidad==0 || value.idTicket==null){
Swal.fire(
            'Por favor llene todos los campos!',
            'venta no realizada!',
            'error'
                     )
}
else{
  if(this.bandera==true){
    this.ObtenerUsuarios(value);
  }
  else if (this.bandera==false){
   this.ObtenerUsuarioCajero()
  }
  
  console.log("ticket despues de la funcion obtener usuarios")
  console.log(this.ticket)
 // this.refrescar();
  console.log("ticket despues de refrescar en la funcion de realizar ventas")
  console.log(this.ticket)
}


}
refrescar(){
  console.log("entro a refrescar")
    this.ticket.Id='';
     this.ticket.FechaCompra='';
     this.ticket.FechaIngreso='';
    this.ticket.Precio='';
     this.ticket.Cantidad=0;
     this.ticket.Qr='';
     this.ticket.Token='';
     this.ticket.LastModification='';
     this.ticket.EstadoId='';
     this.ticket.idTicket=0;
     this.ticket.UUsuarioId=0;
     this.ticket.UUsuario='';
     this.ticket.NumeroDocumento=0;
     this.ticket=this.ticketVacio
     console.log(this.ticket)
}
}
