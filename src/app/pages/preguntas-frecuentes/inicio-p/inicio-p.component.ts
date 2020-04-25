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
preguntastemp:Pregunta[];
  pregunta: Pregunta ={
    nombre: '',
    descripcion: '',
   
  }

constructor(private servi:ServicioLService) {  this.ObtenerPreguntas}

   PageActual:number=1;
   filterPregunta='';
   i :number=0;

  ObtenerPreguntas(){

    this.servi.ObtenerJson().subscribe(resultado =>{
     this.preguntas=resultado;
    
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

 guardar({value}: {value:Pregunta}){

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
                      this.comparacion(value);
                                         }
                   })
   }
 

  }

  comparacion(value){
     var bandera="no existe"
     this.servi.ObtenerJson().subscribe(resultado =>{
        this.preguntastemp=resultado;
 
   for(this.i=0;this.i<this.preguntastemp.length;this.i++){
         if( value.id!=this.preguntastemp[this.i].id && value.descripcion.toLowerCase()==this.preguntastemp[this.i].descripcion.toLowerCase()  ){
            bandera="existe";
         }
         else if(value.id!=this.preguntastemp[this.i].id && value.nombre.toLowerCase()==this.preguntastemp[this.i].nombre.toLowerCase() ){
            bandera="existe p";
         }

  
   }

   if(bandera=="existe"){
        Swal.fire(
           'La descripcion  ya existe para otra pregunta',
           'Pregunta no agregada',
           'error'
            
             )
      this.refrescar();
                        }
   else if(bandera=="existe p"){
           Swal.fire(
           'La pregunta  ya existe ',
           'Pregunta no agregada',
           'error'
            
             )
       this.refrescar();
                                }
   else{
           Swal.fire(
            'Guardado!',
            'La pregunta ha sido editada ',
            'success'
                  )
    this.servi.update(value,value.id);
    
   }
 })
  
  } 

}
