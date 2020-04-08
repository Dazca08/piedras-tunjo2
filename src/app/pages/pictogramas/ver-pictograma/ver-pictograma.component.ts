import { Component, OnInit } from '@angular/core';
import { ServiciopicService } from 'src/app/services/serviciopic.service';
import { P } from 'src/app/pages/pictogramas/pictograma.model';
import Swal from 'sweetalert2';
import { Router,} from '@angular/router';

@Component({
  selector: 'app-ver-pictograma',
  templateUrl: './ver-pictograma.component.html',
  styleUrls: ['./ver-pictograma.component.css']
})
export class VerPictogramaComponent implements OnInit {

  constructor(private ServiciopicService:ServiciopicService,private router: Router) {  this.ObtenerPictograma}
  filtropicPost ='';
  PageActual:number=1;
   pic: P[];  
      
   picto: P ={
     
     nombre: "",
     descripcion: "",
     calificacion: "",    
   }
  ObtenerPictograma(){
 this.ServiciopicService.ObtenerJson().subscribe(resultado =>{
   this.pic=resultado;
   
   console.log("Informacion ya tiene resultado");
   console.log(this.pic.length)
  
 },
 error=>{
console.log(JSON.stringify(error));

 }); 
   }

   eliminar(id){

    Swal.fire({
    title: 'Esta seguro?',
    text: "¿Realmente quiere eliminar el pictograma?",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Eliminar!'
  }).then((result) => {
      if (result.value) {
        Swal.fire(
  
          'Eliminado!',
          'El pictograma ha sido eliminado....',
          'success'
        
        )
        this.refrescar(id);
        this.refrescar(id);
      }
    })
    this.router.navigateByUrl("/admin/pictogramas");
      
  }
  refrescar(id){
    console.log(id);
    this.ServiciopicService.Eliminar(id);
    this.ObtenerPictograma();
    this.ngOnInit();
 
 
 }

   i:number;
  ngOnInit(): void {
    this.ObtenerPictograma();
    this.ObtenerPictograma();
  }
}

