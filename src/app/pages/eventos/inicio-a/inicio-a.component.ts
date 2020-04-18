import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule , FormsModule } from '@angular/forms';
import { Evento } from './evento.model';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ServicioEventoService } from '../servicio-evento.service';
@Component({
  selector: 'app-inicio-a',
  templateUrl: './inicio-a.component.html',
  styleUrls: ['./inicio-a.component.css']
})
export class InicioAComponent implements OnInit {
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

 constructor(private servi:ServicioEventoService) {  this.ObtenerEventos}
   PageActual:number=1;
    filterEvento ='';
    fechatemp:string="";
    fechaPtemp:string="";
    i:number=0;
    imagen:any;
 

  ObtenerEventos(){
 this.servi.ObtenerJson().subscribe(resultado =>{
   this.eventos=resultado;
   for(this.i=0;this.i<this.eventos.length;this.i++){
     this.fechatemp=this.eventos[this.i].Fecha;
     this.fechaPtemp=this.eventos[this.i].FechaPublicacion;
     var splitted = this.fechatemp.split("T", 2); 
     var splittedd=this.fechaPtemp.split("T", 2);
    // console.log(splitted)
      this.fechatemp=splitted[0];
      this.fechaPtemp=splittedd[0];
      this.eventos[this.i].Fecha=this.fechatemp;
      this.eventos[this.i].FechaPublicacion=this.fechaPtemp;
      if(this.eventos[this.i].ImagenesUrl.includes('@' , 0)==true){
             console.log(this.eventos[this.i].ImagenesUrl);
             this.imagen=this.eventos[this.i].ImagenesUrl;
             var split=this.imagen.split("@");
             console.log(split);
             this.imagen=split[0];
             this.eventos[this.i].ImagenesUrl=this.imagen;
      }
   }

   //this.eventos=this.eventos.filter(x=>x.Nombre=='');
    console.log(this.eventos)
   console.log("Informacion ya tiene resultado");
  
 },
 error=>{
console.log(JSON.stringify(error));

 }); 
   }

   
  ngOnInit(): void {
  	this.ObtenerEventos();  
  }


    eliminar(id){
 

       Swal.fire({
  title: 'Estas seguro?',
  text: "El evento no se podra recuperar!",
  icon: 'warning',
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'Si, Borrar!'
}).then((result) => {
  if (result.value) {
    Swal.fire(
      'Borrado!',
      'El evento ha sido eliminado',
      'success'
    )

      this.servi.Eliminar(id);
      this.refrescar(id);


  }
})

   
  
}
refrescar(id){
 this.ObtenerEventos();
  this.ngOnInit();
   this.ObtenerEventos();
  
}

}
