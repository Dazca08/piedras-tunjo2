import { Component, OnInit } from '@angular/core';
import { ServicioSubService } from '../servicio-sub.service';
import { Subscripciones } from '../subscripcion.model';
import { Router,ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ver-subscripciones',
  templateUrl: './ver-subscripciones.component.html',
  styleUrls: ['./ver-subscripciones.component.css']
})
export class VerSubscripcionesComponent implements OnInit {


  constructor(private Servicio_SubService:ServicioSubService, private router: Router) {  this.ObtenerSubscripcion}

    filtroSubscripcionesPost ='';
    PageActual:number=1;

    subs: Subscripciones[];  
      
    subscrip: Subscripciones ={
      
      id_subscripcion:"",
      subscripcion: "",
      contenidoSubscripcion: "",
      valorSubscripcion:"",     
    }
    

    ObtenerSubscripcion(){          
      this.Servicio_SubService.ObtenerJson().subscribe(resultado =>{
      this.subs=resultado;
          
      console.log("Informacion ya tiene resultado");
      console.log(this.subs.length)
    },
      error=>{ console.log(JSON.stringify(error));

    }); 
        
  }

eliminar(id_subscripcion){

  Swal.fire({
  title: 'Esta seguro?',
  text: "¿Realmente quiere eliminar la subscripcion?",
  icon: 'warning',
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'Eliminar!'
}).then((result) => {
    if (result.value) {
      Swal.fire(

        'Eliminado!',
        'La subscripcion ha sido eliminada....',
        'success'
      
      )
      this.refrescar(id_subscripcion);      
    }
  })
  this.router.navigateByUrl("/admin/ver_subs");
    
}

    i:number;
  ngOnInit(): void {
  	this.ObtenerSubscripcion();
  }
  

  refrescar(id_subscripcion){
    console.log(id_subscripcion);
    this.Servicio_SubService.Eliminar(id_subscripcion);    
    this.ngOnInit();
 
 
 }

}
