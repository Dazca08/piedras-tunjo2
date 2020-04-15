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
  constructor(private servi:ServiciopqrService) { }

    ObtenerPqrs(){
 this.servi.ObtenerJson().subscribe(resultado =>{
   this.pqrs=resultado.results;
   for(this.i=0;this.i<this.pqrs.length;this.i++){
     this.fechatemp=this.pqrs[this.i].FechaPublicacion;
  
     var splitted = this.fechatemp.split("T", 2); 
  
    // console.log(splitted)
      this.fechatemp=splitted[0];
 
      this.pqrs[this.i].FechaPublicacion=this.fechatemp;
     
   }
    
    console.log(this.pqrs)
   console.log("Informacion ya tiene resultado");
  
 },
 error=>{
console.log(JSON.stringify(error));

 }); 
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

      this.refrescar(id);
  this.ObtenerPqrs();
  this.ngOnInit();

  }
})

   
  
}

refrescar(id){
 
   console.log(id);
     this.servi.Eliminar(id);
 //this.usuarios=this.usuarios.filter(x=>x.Id==id);
 this.ObtenerPqrs();
  this.ngOnInit();


}

 guardar({value, valid }: {value:Pqr, valid: boolean}){
   console.log(value)
    console.log(value.Id)

        Swal.fire({
  title: 'Esta seguro?',
  text: "Desea guardar los cambios?",
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

      value.UEstadoPQR.Nombre='atendida';
      console.log(value.UEstadoPQR.Nombre)
      console.log(value)
   this.servi.update(value,value.Id);  
  //this.Router.navigate(['/admin/editarevento/'+this.id])
   
  //  this.refrescar(this.id);
  }
})
   

}

}
