import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ServicioEventoService } from '../../pages/eventos/servicio-evento.service';

import { Evento } from 'src/app/pages/eventos/inicio-a/evento.model';
import {Array} from 'src/app/interfaces/Array.interface';
import Swal from 'sweetalert2';
declare var $: any;
@Component({
  selector: 'app-seccion-eventos', 

  templateUrl: './seccion-eventos.component.html',
  styleUrls: ['./seccion-eventos.component.css']
})
export class EventosComponent implements OnInit {
eventos: Evento[];
  evento: Evento ={
    Nombre: '',
    FechaPublicacion: '',
     Fecha: '',
    Descripcion: '',
     Calificacion: '',
    ImagenesUrl: '',
     ComentariosId: '',
    ListaComentariosEvento: '',

   
  }
  array:Array={
title:'',
start:'',
color:''

  }

  fecha = Date.now();

  public minDate: Date = new Date(this.fecha);
  public maxDate: Date = new Date ('08/27/2020');
public value: Date = new Date (this.fecha);
  Eventos: any;
  descripcion: any;
  nombre: any;
  fechaa:any;
   fechatemp:string="";
   nombretemp:string="";
  constructor(private servicioeventoservice: ServicioEventoService) {
    this.ObtenerEventos();
  }
    arraiy =[
    {
   title:'',
    start:'',
    color:''
  }
  ];
  ObtenerEventos() {
    this.servicioeventoservice.ObtenerJson1().subscribe(resultado => {
      this.Eventos = resultado;
      this.descripcion = this.Eventos.Descripcion;
      this.nombre = this.Eventos.Nombre;
    },
    error => {
      console.log(JSON.stringify(error));
    });
  }

 //title = 'easyfullcalendar';
 fechatemmp:string="";
 nombretemmp:string="";
 filtrofecha:any;
 filtrofechaE:any;
filtronombre:any;
filtronombreE:any;
funcion(eventoos , event ){

   setTimeout(() => {
      
        $("#calendar").fullCalendar({  

                        header: {
                            left   : 'prev,next today',
                            center : 'title',
                            right  : 'month,agendaWeek,agendaDay'
                        },
                       locale: 'es',
         monthNames: ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'],
        monthNamesShort: ['Ene','Feb','Mar','Abr','May','Jun','Jul','Ago','Sep','Oct','Nov','Dic'],
        dayNames: ['Domingo','Lunes','Martes','Miércoles','Jueves','Viernes','Sábado'],
        dayNamesShort: ['Dom','Lun','Mar','Mié','Jue','Vie','Sáb'],         
                                
    

                        navLinks   : true,
                        editable   : true,
                        eventLimit : true,
                        events:eventoos,
  eventClick: function(info) {
                   
                      //console.log(info.title)
                      //  alert(info.title);
this.nombretemmp=info.title;
 // console.log(this.nombretemmp)
  //console.log("temp"+this.fechatemmp);
 // console.log(eventoos)
  //console.log(event)
   this.filtronombre=eventoos.filter(x=>x.title==this.nombretemmp);
  // console.log(this.filtronombre)
if(this.filtronombre.length==0){
//console.log("es cero :V")
                      Swal.fire(
  'No existen eventos en este dia !',
  'consulte los dias marcados con un evento para mas informacion',
  'warning'
)
}
else{
   //console.log(eventoos)
     this.filtronombre=eventoos.filter(x=>x.title==this.nombretemmp);
      //console.log(eventoos)
      this.array=this.filtronombre[0];
      //console.log(this.array)
      //console.log(this.array.title)
       this.filtronombreE=event.filter(x=>x.Nombre==this.array.title);
        this.evento=this.filtronombreE[0];
         //var splitted = this.evento.Fecha.split("T", 2); 
     //console.log(splitted)
      //this.evento.Fecha=splitted[0];
      //console.log(this.evento.Fecha)
      //console.log(this.array.start)
      //console.log(this.nombretemmp)
        if(this.array.title==this.nombretemmp){
      Swal.fire({

  title: this.evento.Nombre,
  text: this.evento.Descripcion,
  imageUrl: 'http://piedrasdeltunjo.tk/images/getImage?tipo=evento&nombre='+this.evento.ImagenesUrl,
  imageWidth: 400,
  imageHeight: 200,
  imageAlt: 'Custom image',
})
      //this.array.title=""
        }
        else{
             Swal.fire({

  title: "lo sentimos prro",
  text: ":v no hay eventos",
  imageUrl: 'http://piedrasdeltunjo.tk/images/getImage?tipo=evento&nombre='+this.evento.ImagenesUrl,
  imageWidth: 400,
  imageHeight: 200,
  imageAlt: 'Custom image',
})
        }
}


},
                            //Fin Evento Click
//inicioDayclick
  dayClick: function(date, jsEvent, view) {
  //alert('Clicked on: ' + date.format());
  //alert('Coordinates: ' + jsEvent.pageX + ',' + jsEvent.pageY);
  //alert('Current view: ' + view.name);
  // change the day's background color just for fun
  this.fechatemmp=date.format();
  //console.log(this.fechatemmp)
  //console.log("temp"+this.fechatemmp);
 // console.log(eventoos)
  //console.log(event)
   this.filtrofecha=eventoos.filter(x=>x.start==this.fechatemmp);
   //console.log(this.filtrofecha)
if(this.filtrofecha.length==0){
//console.log("es cero :V")
                      Swal.fire(
  'No existen eventos en este dia !',
  'consulte los dias marcados con un evento para mas informacion',
  'warning'
)
}
else{
  // console.log(eventoos)
     this.filtrofecha=eventoos.filter(x=>x.start==this.fechatemmp);
     // console.log(eventoos)
      this.array=this.filtrofecha[0];
     // console.log(this.array.title)
       this.filtrofechaE=event.filter(x=>x.Nombre==this.array.title);
        this.evento=this.filtrofechaE[0];
         //var splitted = this.evento.Fecha.split("T", 2); 
     //console.log(splitted)
      //this.evento.Fecha=splitted[0];
      //console.log(this.evento.Fecha)
      //console.log(this.array.start)
      //console.log(this.fechatemmp)
        if(this.array.start==this.fechatemmp){
      Swal.fire({

  title: this.evento.Nombre,
  text: this.evento.Descripcion,
  imageUrl: 'http://piedrasdeltunjo.tk/images/getImage?tipo=evento&nombre='+this.evento.ImagenesUrl,
  imageWidth: 400,
  imageHeight: 200,
  imageAlt: 'Custom image',
})
      //this.array.title=""
        }
        else{
             Swal.fire({

  title: "lo sentimos prro",
  text: ":v no hay eventos",
  imageUrl: 'http://piedrasdeltunjo.tk/images/getImage?tipo=evento&nombre='+this.evento.ImagenesUrl,
  imageWidth: 400,
  imageHeight: 200,
  imageAlt: 'Custom image',
})
        }
}


                    }
                    });
    
     }, 100);

 
}

     
 i:number=0;
//k:string[];
 
  ngOnInit(): void {
   /* this.servicioeventoservice.ObtenerJson1().subscribe(resultado => {
      this.evento = resultado;
     console.log(this.evento)
    console.log(this.evento.Nombre)
   // this.funcion(this.evento.Nombre,this.evento.Fecha)
    },
    error => {
      console.log(JSON.stringify(error));
    });*/

  this.servicioeventoservice.ObtenerJson().subscribe(resultado => {
      this.eventos = resultado;
 console.log(this.eventos);
   //  console.log(this.eventos)
   // console.log(this.eventos.Nombre)
    
   // console.log(this.i);
    this.eventos.length
   for(this.i=0 ;this.i<this.eventos.length;this.i++){
    this.evento=this.eventos[this.i];
     //   console.log(this.evento);
    this.fechatemp=this.evento.Fecha;
    this.nombretemp=this.evento.Nombre;


    var splitted = this.fechatemp.split("T", 2); 
    // console.log(splitted)
      this.fechatemp=splitted[0];
     // console.log("k ya "+this.k)
      //this.arraiy.start+=","+this.fechatemp;
     // this.arraiy.title+=","+this.nombretemp;
      this.arraiy.push({title:this.nombretemp,start:this.fechatemp,color:"#f9c66a"});
  //    console.log(this.arraiy)
  
     // this.array[this.i]=this.arraiy;
    
     

   
    //this.arraiy.Nombre=this.evento.Nombre;
   //this.arraiy.Fecha=this.evento.Fecha;

    //this.array[this.i]=this.evento
   //console.log(this.evento);

  // console.log("este es my array"+this.myarray[this.i])
 //console.log("eventos"+this.eventos)
   }
   //console.log("arraiyend"+this.arraiy)
  // console.log("eventos"+this.eventos)
       //console.log(this.tipoDesc)
   // this.funcion(this.nombretemp,this.fechatemp,this.eventos.length);
    this.funcion( this.arraiy , this.eventos);
    },
    error => {
      console.log(JSON.stringify(error));
    });
 
  }


}
