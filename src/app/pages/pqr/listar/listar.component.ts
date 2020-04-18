import { Component, OnInit } from '@angular/core';
import { Pqr} from 'src/app/interfaces/pqr.interface';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule , FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ServiciopqrService } from 'src/app/services/serviciopqr.service';
@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {
pqrs:Pqr[];
PageActual:number=1;
i:number=0;
fechatemp:string='';
filterpregunta ='';
indicador:boolean=true;
indicadorBoton:string="PQR Contestados"
  constructor(private servi:ServiciopqrService) { }

    ObtenerPqrs(){
      console.log(this.indicador)
      if(this.indicador==true){
          this.servi.ObtenerJson().subscribe(resultado =>{
   this.pqrs=resultado.results;
   for(this.i=0;this.i<this.pqrs.length;this.i++){
     this.fechatemp=this.pqrs[this.i].FechaPublicacion;
  
     var splitted = this.fechatemp.split("T", 2); 
  
    // console.log(splitted)
      this.fechatemp=splitted[0];
 
      this.pqrs[this.i].FechaPublicacion=this.fechatemp;
     
   }
   this.pqrs=this.pqrs.filter(x=>x.Respuesta=='');
    
    console.log(this.pqrs)
   console.log("Informacion ya tiene resultado");
  
 },
 error=>{
console.log(JSON.stringify(error));

 }); 
      }
      else if (this.indicador==false){
               this.servi.ObtenerJson().subscribe(resultado =>{
   this.pqrs=resultado.results;
   for(this.i=0;this.i<this.pqrs.length;this.i++){
     this.fechatemp=this.pqrs[this.i].FechaPublicacion;
  
     var splitted = this.fechatemp.split("T", 2); 
  
    // console.log(splitted)
      this.fechatemp=splitted[0];
 
      this.pqrs[this.i].FechaPublicacion=this.fechatemp;
     
   }
   this.pqrs=this.pqrs.filter(x=>x.Respuesta!='');
    
    console.log(this.pqrs)
   console.log("Informacion ya tiene resultado");
  
 },
 error=>{
console.log(JSON.stringify(error));

 });
      }

   }
   listarContestados(){
   console.log('me listarom :v')
   if(this.indicador==true){
     this.indicador=false;
     this.indicadorBoton="PQR Sin contestar"
   }
   else if(this.indicador==false){
    this.indicador=true;
    this.indicadorBoton="PQR Contestados"
   }
   
   console.log(this.indicador)
   this.refrescar();
   }
  ngOnInit(): void {
  	this.ObtenerPqrs();
  }
 eliminar(id){
 
console.log(id);
       Swal.fire({
  title: 'Estas seguro?',
  text: " No se podra recuperar la informacion!",
  icon: 'warning',
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'Si, Borrar!'
}).then((result) => {
  if (result.value) {
    Swal.fire(
      'Borrado!',
      ' la informacion ha sido eliminada',
      'success'
    )

      this.refrescar();
  //this.ObtenerPqrs();
  //this.ngOnInit();

  }
})

   
  
}

refrescar(){
 
  // console.log(id);
     //this.servi.Eliminar(id);
 //this.usuarios=this.usuarios.filter(x=>x.Id==id);
 this.ObtenerPqrs();
  this.ngOnInit();


}

 guardar({value, valid }: {value:Pqr, valid: boolean}){
   if(value.Respuesta==""){
               Swal.fire(
  'Por favor Ingrese una respuesta!',
  'Respuesta no  enviada!',
  'error'
)
   }
   else if(value.Respuesta.length<10){
         Swal.fire(
  'La respuesta debe tener como minimo 10 caracteres!',
  'Respuesta no  enviada!',
  'error'
)
   }
   else{
     console.log(value)
    console.log(value.Id)

        Swal.fire({
  title: 'Esta seguro?',
  text: "Desea enviar esta respuesta?",
  icon: 'warning',
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'Si, guardar!'
}).then((result) => {
  if (result.value) {
    Swal.fire(

      'Guardado!',
      'La respuesta ha sido enviada ',
      'success'
     
    )

      value.UEstadoPQR={Id:1 , Nombre:"atendida"};
      console.log(value.UEstadoPQR.Nombre)
      console.log(value)
   this.servi.update(value,value.Id);  
  //this.Router.navigate(['/admin/editarevento/'+this.id])
   
  this.refrescar();
  }
})
   }
   
   

}

}
