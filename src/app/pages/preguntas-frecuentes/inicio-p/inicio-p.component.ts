import { Component, OnInit } from '@angular/core';
import { Pregunta } from './pregunta.model';
import { ServicioLService } from '../servicio-l.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-inicio-p',
  templateUrl: './inicio-p.component.html',
  styleUrls: ['./inicio-p.component.css']
})
export class InicioPComponent implements OnInit {

  
preguntas: Pregunta[];
  pregunta: Pregunta ={
    nombre: '',
    descripcion: '',
   
  }
    constructor(private servi:ServicioLService) {  this.ObtenerPreguntas}
PageActual:number=1;
filterPregunta='';
  ObtenerPreguntas(){
 this.servi.ObtenerJson().subscribe(resultado =>{
   this.preguntas=resultado;
   
   console.log(this.preguntas);
  
 },
 error=>{
console.log(JSON.stringify(error));

 }); 
   }
  ngOnInit(): void {
  	this.ObtenerPreguntas();
  }
   eliminar(id){
    Swal.fire({
  title: 'Esta seguro?',
  text: "Al eliminar una pregunta no se podra recuperar!",
  icon: 'warning',
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'Si, Borrar!'
}).then((result) => {
  if (result.value) {
    Swal.fire(

      'Borrado!',
      'La pregunta ha sido eliminado.',
      'success'
     
    )
       this.servi.Eliminar(id);
      this.refrescar();
    
  }
})

}
refrescar(){
 this.ObtenerPreguntas();
  this.ObtenerPreguntas();
  this.ngOnInit();


}
 guardar({value, valid }: {value:Pregunta, valid: boolean}){
   console.log(value.descripcion)
   if(value.nombre=="" || value.descripcion==""){
           Swal.fire(
  'Por favor llene todos los campos!',
  'pregunta no editada!',
  'error'
)
   }
   else if(value.nombre.length<5 || value.descripcion.length<10){
           Swal.fire(
  'la pregunta debe tener al menos 5 caracteres y la descripcion al menos 10!',
  'pregunta no editada!',
  'error'
)
   }


   else{
         Swal.fire({
  title: 'Esta seguro?',
  text: "Desea editar esta pregunta?",
  icon: 'warning',
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'Si, guardar!'
}).then((result) => {
  if (result.value) {
    Swal.fire(

      'Guardado!',
      'La pregunta ha sido editada ',
      'success'
     
    )

   this.servi.update(value,value.id)
   this.refrescar();
  }
})
   }
 

}

}
