import { Component, OnInit } from '@angular/core';
import { Router,} from '@angular/router';
import { ServiciopromService } from 'src/app/services/servicioprom.service';
import { prom } from 'src/app/pages/promociones/promocion.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-inicioprom',
  templateUrl: './inicioprom.component.html',
  styleUrls: ['./inicioprom.component.css']
})
export class IniciopromComponent implements OnInit {

  constructor(private ServiciopromService:ServiciopromService,private router: Router) {  this.ObtenerPromocion}
  filtropromPost ='';
  PageActual:number=1;
  i:number;
  promo: prom[];  
        
   prom: prom ={
     id:"",
     nombre: "",
     descripcion: "",
     precio: "",    
   }

   ObtenerPromocion(){
    this.ServiciopromService.Obtenerpromocion().subscribe(resultado =>{
      this.promo=resultado;
      
      console.log("Informacion ya tiene resultado");
      console.log(this.promo)
     
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
              'La promocion ha sido eliminada....',
              'success'
            
            )
            this.refrescar(id);
            this.refrescar(id);
          }
        })
       // this.router.navigateByUrl("/admin/promociones");
          
      }
      refrescar(id){
        console.log(id);
        this.ServiciopromService.Eliminar(id);
       this.ObtenerPromocion();
        this.ngOnInit();
     
     
     }
    
  ngOnInit(): void {
   this.ObtenerPromocion();
  }

}
