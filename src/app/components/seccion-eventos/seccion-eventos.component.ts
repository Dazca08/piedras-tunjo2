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
   }
    arraiy =[
    {
   title:'',
    start:'',
    color:''
  }
  ];
 //title = 'easyfullcalendar';
 fechatemmp:string="";
 nombretemmp:string="";
 filtrofecha:any;
 filtrofechaE:any;
filtronombre:any;
filtronombreE:any;

funcion(eventoos , event ){
    
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
              
   Swal.fire({
      title: 'Espere por favor',
      text: 'Cargando información',
      icon: 'info',
      allowOutsideClick: false
    });
    Swal.showLoading();
this.nombretemmp=info.title;

   this.filtronombre=eventoos.filter(x=>x.title==this.nombretemmp);

if(this.filtronombre.length==0){

                      Swal.fire(
  'No existen eventos en este dia !',
  'consulte los dias marcados con un evento para mas informacion',
  'info'
)
}
else{
  
     this.filtronombre=eventoos.filter(x=>x.title==this.nombretemmp);

      this.array=this.filtronombre[0];
      
       this.filtronombreE=event.filter(x=>x.Nombre==this.array.title);
        this.evento=this.filtronombreE[0];
       if(this.evento.ImagenesUrl.includes("@")){
         var splited = this.evento.ImagenesUrl.split("@", 2); 
   
      this.evento.ImagenesUrl=splited[0];
    
       }
        if(this.array.title==this.nombretemmp){
             
           const Toast = Swal.mixin({
  toast: true,
 // position: 'top-end',
  showConfirmButton: true,
  width:700,
  timer: 3000,
  timerProgressBar: true,
  onOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer)
    toast.addEventListener('mouseleave', Swal.resumeTimer)
  }
})

Toast.fire({
//title: this.evento.Nombre,

  text: this.evento.Descripcion,
  imageUrl: 'http://piedrasdeltunjo.tk/images/getImage?tipo=evento&nombre='+this.evento.ImagenesUrl,
  
  imageWidth: 400,
  imageHeight: 200,
  imageAlt: 'Custom image',
})
        }
        else{
             Swal.fire({

  title: "lo sentimos ",
  text: "no hay eventos",
  imageUrl: 'http://piedrasdeltunjo.tk/images/getImage?tipo=evento&nombre='+this.evento.ImagenesUrl,
  imageWidth: 400,
  imageHeight: 200,
  imageAlt: 'Custom image',
})
        }
}


},

//inicioDayclick
  dayClick: function(date, jsEvent, view) {
  this.fechatemmp=date.format();
 
   this.filtrofecha=eventoos.filter(x=>x.start==this.fechatemmp);

if(this.filtrofecha.length==0){
 
const Toast = Swal.mixin({
  toast: true,
  showConfirmButton: true,
 
})

Toast.fire({
  icon: 'info',
  title: 'Este dia no tiene Eventos'
})

}
else{
 
     this.filtrofecha=eventoos.filter(x=>x.start==this.fechatemmp);
  
      this.array=this.filtrofecha[0];
     
       this.filtrofechaE=event.filter(x=>x.Nombre==this.array.title);
        this.evento=this.filtrofechaE[0];
 
        if(this.array.start==this.fechatemmp){

        }
        
}


                    }
                    });
    
     }




     
 i:number=0;
coloresAleatorios(){
var myArray = [


"#9999CC",
"#99CC99",
"#99FFCC",
"#CCCC66",
"#FFFF66",
"#FFCCCC",
"#CCFF99"
];
var cuatroRandom = "";
var posicionesElegibles = [];
var i, r;
for (i = 0; i < myArray.length; i++) posicionesElegibles[i] = i;
for (i = 0; i < myArray.length; i++) {
  r = Math.floor(Math.random() * posicionesElegibles.length);
  cuatroRandom=myArray[posicionesElegibles[r]];
  posicionesElegibles.splice(r, 1);
}
console.log(cuatroRandom);
return cuatroRandom;
}
 
  ngOnInit(): void {


  this.servicioeventoservice.ObtenerJson().subscribe(resultado => {
      this.eventos = resultado;
//  console.log(this.eventos);

    this.eventos.length
   for(this.i=0 ;this.i<this.eventos.length;this.i++){
    this.evento=this.eventos[this.i];
  
    this.fechatemp=this.evento.Fecha;
    this.nombretemp=this.evento.Nombre;


    var splitted = this.fechatemp.split("T", 2); 
   
      this.fechatemp=splitted[0];
    
      this.arraiy.push({title:this.nombretemp,start:this.fechatemp,color:this.coloresAleatorios()});

   }

    this.funcion( this.arraiy , this.eventos);
    },
    error => {
      console.log(JSON.stringify(error));
    });
 
  }


}
