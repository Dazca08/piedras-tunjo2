import { Component, OnInit } from '@angular/core';
import { Router,} from '@angular/router';
import { ServiciopromService } from 'src/app/services/servicioprom.service';
import { prom } from 'src/app/pages/promociones/promocion.model';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-agregarprom',
  templateUrl: './agregarprom.component.html',
  styleUrls: ['./agregarprom.component.css']
})
export class AgregarpromComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,
    private servi: ServiciopromService,
    Router: Router,
    private router: Router) { }
    promo: prom[];  
        
    insertarprom: prom ={
     id:"",
     nombre: "",
     descripcion: "",
     precio: "",    
    }
 
    agregar({value, valid}: {value: prom, valid: boolean}){

      if(this.insertarprom.nombre=='' || this.insertarprom.descripcion=='' 
      ||this.insertarprom.precio=='' ){
      console.log(this.insertarprom.nombre);
            Swal.fire(
        'Por favor llene todos los campos!',
        'Usuario no  Editado!',
        'error'
      )
          }
          
          else{
      
              Swal.fire({
        title: 'Esta seguro?',
        text: "Desea crear la Promocion?",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, guardar!'
      }).then((result) => {
        if (result.value) {
          Swal.fire(

            'Guardado!',
            'La promoción ha sido Guardada ',
            'success'
          
    )
       
       
   // this.router.navigateByUrl("/admin/promociones");
      this.servi.insertar(value);
     
      
   
  }
})
       
     
    }
   

    }

  ngOnInit(): void {
  }

}
