import { Component, OnInit } from '@angular/core';
import { ServiciopicService } from 'src/app/services/serviciopic.service';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { P } from 'src/app/pages/pictogramas/pictograma.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-agregar-pic',
  templateUrl: './agregar-pic.component.html',
  styleUrls: ['./agregar-pic.component.css']
})
export class AgregarPicComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,
              private servi: ServiciopicService,
              Router: Router,
              private router: Router) { }

    
 inspic: P[];
 
 insertarpic: P ={
        
        
        nombre: '',
        descripcion: '',
        imagenes_url: '',
        calificacion: 0,
        estado: 1,
        id_parque: '',
            
               
       }
    
    agregar({value, valid}: {value: P, valid: boolean}){

      if(this.insertarpic.nombre=='' || this.insertarpic.descripcion=='' 
      ||this.insertarpic.imagenes_url=='' || this.insertarpic.id_parque==''){
      console.log(this.insertarpic.nombre);
            Swal.fire(
        'Por favor llene todos los campos!',
        'Usuario no  Editado!',
        'error'
      )
          }
          
          else{
      
              Swal.fire({
        title: 'Esta seguro?',
        text: "Desea crear el Pictograma?",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, guardar!'
      }).then((result) => {
        if (result.value) {
          Swal.fire(

            'Guardado!',
            'El Pictograma ha sido Guardado ',
            'success'
          
    )
       
       
      this.servi.insertar(value);
       this.router.navigateByUrl("/admin/pictogramas")
      
   
  }
})
       
     
    }
   

    }


    ngOnInit(): void {
      
  }

}



