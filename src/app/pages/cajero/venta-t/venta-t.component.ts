import { Component, OnInit ,ViewChild,ElementRef} from '@angular/core';
import {VentaTicket } from 'src/app/interfaces/ticket';
import { AuthService } from 'src/app/services/auth.service';
import {VentaTicketsServiceService } from 'src/app/services/venta-tickets-service.service';
import { ReservaCabana } from '../../../interfaces/reserva-cabana.interface';
import { ReservaCabanasService } from 'src/app/services/reserva-cabanas.service';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule , FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import * as jsPDF from "jspdf";
import  html2canvas from 'html2canvas';
import html2pdf from 'html2pdf.js'
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
PageActual:number=1;
fechatemp:any
reservaCabanas: ReservaCabana[];
reservaCabanasAll:ReservaCabana[];
exportAsConfig={
  type:'png',
  elementId:'element'
} 
  constructor(private router: Router, private ServicioTicket:VentaTicketsServiceService
   ,private authService: AuthService,private reservaCabService: ReservaCabanasService) {    }
 // ngxQrcode2 = "10732538042";
  //techiediaries = "tickete1";
letsboot = '';
  ngOnInit(): void {
 
        this.ObtenerTickets();
        this.prepare()
         var k= Date.now();
    console.log(k)
      
  }
  MensajePrecio(Precio){
       Swal.fire(
            'Tickets Verificados!',
            'Precio total en la transaccion :'+Precio,
            'info'
                     )
       this.refrescar();
  }
 ObtenerUsuarioCajero(){
  
  this.authService.getUsuario().then(res => 

      this.ServicioTicket.getu().subscribe(resultado =>{
    this.k=resultado;
    this.k=this.k.filter(x=>x.Id==res.Id);
    console.log(this.k)
    console.log(this.ticket)
  this.ticket.FechaCompra=new Date().toString()
    this.ticket.FechaIngreso=this.ticket.FechaCompra
 
 this.ticket.EstadoId="1";
 this.ticket.LastModification=new Date().toString();


 this.ticket.UUsuarioId=this.k[0].Id
 this.ticket.UUsuario=" "
  var preciotemp=this.ticktes[this.ticket.idTicket].Precio*this.ticket.Cantidad
 this.ticket.Precio=preciotemp.toString()
  this.ticket.Token= this.ticket.idTicket.toString()
  var ticketee=this.ticket.toString();
 this.ticket.Qr=ticketee;
  //this.ticket.Qr="1073253903"
  //this.ticket.UUsuario.NumeroDocumento="1073253903"
 //this.letsboot = JSON.stringify(this.ticket)
 this.letsboot = this.ticket.NumeroDocumento;
 console.log("ticket antes de enviar")
 console.log(this.ticket)
 this.ServicioTicket.insertar(this.ticket);
 setTimeout(() => { this.CreatePdf(this.ticket) }, 2000);
 



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
 setTimeout(() => { this.MensajePrecio(value.Precio) }, 2000);
 
  //this.refrescar()
}

console.log(value)
 
//this.refrescar();
    
 },
 error=>{
console.log(JSON.stringify(error));

 });
  

  }

 yyyymmdd(dateIn) {
   var yyyy = dateIn.getFullYear();
   var mm = dateIn.getMonth()+1; // getMonth() is zero-based
   var dd  = dateIn.getDate();
   console.log(yyyy)
 
   if(mm<10){
    mm="0"+mm
   }

     console.log(mm)
      if(dd<10){
    dd="0"+dd
   }
   console.log(dd)
   return String(yyyy +"-" + mm +"-" + dd); // Leading zeros for mm and dd
}


  async prepare() {
    this.reservaCabanas = await this.reservaCabService.getReservasCabanas();
    this.reservaCabanasAll=await this.reservaCabService.getReservasCabanas();
    console.log(this.reservaCabanas)
    for(var i=0;i<this.reservaCabanas.length;i++){
          this.fechatemp=this.reservaCabanas[i].FechaReserva;
    
     var splitted = this.fechatemp.split("T", 2); 
      this.fechatemp=splitted[0];
  
      this.reservaCabanas[i].FechaReserva=this.fechatemp;
      this.reservaCabanasAll[i].FechaReserva=this.fechatemp;

    }
    var today = new Date();
    var fechaactual=this.yyyymmdd(today)
    console.log(fechaactual);
   
   this.reservaCabanas=this.reservaCabanas.filter(x=>x.FechaReserva.toString()==fechaactual)
 console.log(this.reservaCabanas)
 console.log(this.reservaCabanasAll)
  }

 ObtenerTickets(){
  	this.ServicioTicket.getTickets().subscribe(resultado =>{

   this.ticktes=resultado;
  for(var i =0;i<this.ticktes.length;i++){
     this.ticktes[i].Id=this.ticktes[i].Id-1;

   }
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
else if(this.bandera==false && value.NumeroDocumento<10000000 || value.NumeroDocumento>9999999999){
     Swal.fire(
            'El numero de documento es invalido , debe tener al menos 8 digitos y maximo 10!',
            'venta no realizada!',
            'error'
                     )
}

else if(value.Cantidad>10){
   Swal.fire(
            'La cantidad maxima de tickets que puede comprar un usuario son 10!',
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


reservaCreada:any
comparativo:number=0

public CreatePdf(parametro){
 // alert('downloadig....Ticket');
 const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  onOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer)
    toast.addEventListener('mouseleave', Swal.resumeTimer)
  }
})

Toast.fire({
  icon: 'success',
  title: 'Descargando Tickets'
})
  this.ServicioTicket.getReservas().subscribe(resultado=>{
    this.reservaCreada=resultado.reservas;
 //console.log(parametro.FechaCompra)
 //console.log(this.reservaCreada[0].FechaCompra)
 //var fechaAct=new Date().toString()


// console.log(fechaAct)
   this.reservaCreada=this.reservaCreada.filter(x=>x.NumeroDocumento==parametro.NumeroDocumento);
   // this.usuarios=this.usuarios.filter(x=>x.CorreoElectronico==value.UUsuario);
     //var fecha =new Date(this.reservaCreada[0].FechaCompra).toString()
     // console.log(fecha)
    console.log(this.reservaCreada)
    var tipoticket="";
    
 this.ServicioTicket.getTickets().subscribe(resultado =>{
    var Ticket=resultado
    console.log(Ticket)
    console.log(parametro.idTicket)
    this.comparativo =parseInt(parametro.idTicket,10)+1;
    console.log(this.comparativo)
    Ticket=Ticket.filter(x=>x.Id==this.comparativo)
    console.log(Ticket)
    tipoticket=Ticket[0].Nombre
    var imgsrc= new Image;
var nombreqr=this.reservaCreada[0].Qr;
console.log(this.reservaCreada.length)

imgsrc.src='http://piedrasdeltunjo.tk/images/getImage?tipo=reserva-tickets&nombre='+nombreqr+'.JPEG'

    const doc =new jsPDF();
     //var ii=i+1;
  doc.text("Recibo compra de ticket piedras del tunjo",55,10)
   doc.addImage(imgsrc,'jpg',80,40,50,50)
  doc.text("Identificacion  : "+parametro.NumeroDocumento.toString() ,70, 120);
  doc.text("Tipo de ticket : "+tipoticket ,70, 130);
  doc.text("Precio Total : "+parametro.Precio ,70,140);
   doc.text("Cantidad de tiquets para este recibo:"+parametro.Cantidad ,70, 150);
    doc.text("Nota : Para ingresar al parque debes presentar este Recibo en la entrada  " ,20,180);

  
  doc.save("ticket : "+nombreqr)
 
setTimeout(() => { this.MensajePrecio(parametro.Precio) }, 1500);
//this.refrescar();

 })
 

  })

  }
 
}