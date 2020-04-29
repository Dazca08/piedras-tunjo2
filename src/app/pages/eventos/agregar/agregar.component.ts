import { Component, OnInit ,ViewChild} from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule,NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Evento } from '../inicio-a/evento.model';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { ServicioEventoService } from '../servicio-evento.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

eventos: Evento[];
  evento: Evento ={
    Nombre: '',
    FechaPublicacion:Date.now().toString(),
     Fecha: '',
    Descripcion: '',
     Calificacion: '',
    ImagenesUrl:'',
     ComentariosId: '',
    ListaComentariosEvento: '',
    
   
  }
 @ViewChild("eventoForm") eventoForm:FormGroup;
   fechaActual:any;
   fechaActualtemp:any;
   fechaEvento:any;
   resultadoComparacion:any;
  constructor(private formBuilder: FormBuilder,
      private servi: ServicioEventoService ,
      Router: Router  ) { }

  FechaActual(){
  var hoy = new Date();
  var dd=hoy.getDate();
  var mm=hoy.getMonth()+1;
  var yyyy=hoy.getFullYear();
 dd=this.agregarCero(dd);
 mm=this.agregarCero(mm);
  this.fechaActual=yyyy+'-'+mm+'-'+dd;
 
  }

  agregarCero(i){
  if(i<10){
    i="0"+i;
  }
  return i
  }

splitfecha(fecha){
var split=fecha.split('-')
return split
}

Comparacion(fecha , fechaactual){
var añofe=parseInt(fecha[0],10);
var añofa=parseInt(fechaactual[0],10)
var me=parseInt(fecha[1],10);
var ma=parseInt(fechaactual[1],10)
var de=parseInt(fecha[2],10);
var da=parseInt(fechaactual[2],10)
var resultado="valida";
if(añofe<añofa){

   resultado="invalida";

}
else if(añofe==añofa && me<ma){
 
     resultado="invalida";
   
}
else if(añofe==añofa && me==ma && de<da){

    resultado="invalida";

}
else if(añofe==añofa && me==ma && de==da){

    resultado="invalida";

}

 return resultado;
}
agregar({value}:{value:Evento}){



 this.fechaEvento=this.evento.Fecha
  this.fechaActualtemp=this.fechaActual


this.fechaEvento=this.splitfecha(this.fechaEvento);
this.fechaActualtemp=this.splitfecha(this.fechaActualtemp);

this.resultadoComparacion=this.Comparacion(this.fechaEvento,this.fechaActualtemp);
console.log(this.resultadoComparacion);
 if(this.evento.Fecha ==""){
   console.log('error');
  console.log('error seleccione una Fecha');
                     Swal.fire(
  'Por favor seleccione una  fecha para el evento !',
  'evento no  Agregado!',
  'error'
)

 }
 else if(this.resultadoComparacion=="invalida"){
       Swal.fire(
  'La fecha del evento debe ser mayor a la fecha actual !',
  'evento no  Agregado!',
  'error'
)
 }
 else if(this.selectedfile==null){
  console.log('error seleccione una imagen');
                     Swal.fire(
  'Por favor suba una imagen !',
  'evento no  Agregado!',
  'error'
)
 }
 else if(  this.evento.Descripcion=='' || this.evento.Nombre==''){
   console.log('llene todos los campos')
             Swal.fire(
  'Por favor llene todos los campos!',
  'evento no  Agregado!',
  'error'
)
 }

 else if(this.evento.Descripcion.length<5 || this.evento.Nombre.length<5){
             Swal.fire(
  ' Lo campos nombre y descripcion deben tener al menos 5 caracteres par ser validos ',
  'evento no  Agregado!',
  'error')
 }


 else{

this.servi.insertar(value)
this.cargandoImagen();
this.selectedfile=null;
this.refrescar();
      
    //this.eventoForm.reset();

}
 
//this.eventoForm.resetForm();
  }
selectedfile:FileList=null;
i:number=0;
onFileSelected(evento){


//this.selectedfile=<FileList>evento.target.files;
this.selectedfile=evento;
for(this.i=0;this.i<this.selectedfile.length;this.i++){
  this.evento.ImagenesUrl=this.evento.ImagenesUrl+this.selectedfile[this.i].name.toString()+"@";
}


console.log(this.evento.ImagenesUrl);
}
refrescar(){
 this.evento.Nombre="";
this.evento.FechaPublicacion= Date.now().toString();
this.evento.Fecha="";
this.evento.Descripcion="";
this.evento.Calificacion="";
this.evento.ImagenesUrl="";
this.evento.ComentariosId="";
this.evento.ListaComentariosEvento="";
}

   public cargandoImagen(){
  //console.log("si entro");
  console.log(this.selectedfile.length)
 for(this.i=0;this.i<this.selectedfile.length;this.i++){
   this.servi.postFileImagen(this.selectedfile[this.i]).subscribe();
 }
    
  }

  ngOnInit(): void {
    this.FechaActual()
   console.log( this.fechaActual);

  }

}
