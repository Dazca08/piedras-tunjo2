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
fechartemp:string='';
filterpregunta ='';
indicador:boolean=true;
indicadorBoton:string="PQR Contestados"
  constructor(private servi:ServiciopqrService ,private route:Router ) { }

   ObtenerPqrs(){
      console.log(this.indicador)
     if(this.indicador==true){
        this.servi.ObtenerJson().subscribe(resultado =>{
          this.pqrs=resultado.results;
          for(this.i=0;this.i<this.pqrs.length;this.i++){
           this.fechatemp=this.pqrs[this.i].FechaPublicacion;
           this.fechartemp=this.pqrs[this.i].FechaRespuesta;
           var splitted = this.fechatemp.split("T", 2);
           var splitted2=this.fechartemp.split("T",2);
   
           this.fechatemp=splitted[0];
           this.fechartemp=splitted2[0];
           this.pqrs[this.i].FechaPublicacion=this.fechatemp;
           this.pqrs[this.i].FechaRespuesta=this.fechartemp;

           }
   this.pqrs=this.pqrs.filter(x=>x.Respuesta=="");

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
           this.fechartemp=this.pqrs[this.i].FechaRespuesta;
           var splitted = this.fechatemp.split("T", 2);
           var splitted2=this.fechartemp.split("T",2);
   
           this.fechatemp=splitted[0];
           this.fechartemp=splitted2[0];
           this.pqrs[this.i].FechaPublicacion=this.fechatemp;
           this.pqrs[this.i].FechaRespuesta=this.fechartemp;


            }
        this.pqrs=this.pqrs.filter(x=>x.Respuesta!="");

         },
         error=>{
           console.log(JSON.stringify(error));
           });
      }

   }

 listarContestados(){

   if(this.indicador==true){
     this.indicador=false;
     this.indicadorBoton="PQR Sin contestar"
   }
   else if(this.indicador==false){
    this.indicador=true;
    this.indicadorBoton="PQR Contestados"
   }

   this.refrescar();
  }

  ngOnInit(): void {
  	this.ObtenerPqrs();
  }

 eliminar(id){
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
                this.servi.Eliminar(id);
                this.refrescar();

                 }
                   })
   }

refrescar(){
 this.ObtenerPqrs();
  this.ObtenerPqrs();
  this.ngOnInit();


}

 guardar({value}: {value:Pqr}){
   console.log(value);
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
                                value.UEstadoPQRId=2;
                                value.UEstadoPQR.Id=2
                                value.UEstadoPQR.Nombre="Resuelto";
                                console.log(value)  
               this.servi.update(value,value.Id);
               this.refrescar();
                    }
                      })
    }



  }

}
