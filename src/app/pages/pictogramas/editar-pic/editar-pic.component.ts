import { Component, OnInit } from '@angular/core';
import { ServiciopicService } from 'src/app/services/serviciopic.service';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router ,ActivatedRoute} from '@angular/router';
import { P } from 'src/app/pages/pictogramas/pictograma.model';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-editar-pic',
  templateUrl: './editar-pic.component.html',
  styleUrls: ['./editar-pic.component.css']
})
export class EditarPicComponent implements OnInit {
  id:string;
  editpic: P[];
  editarpic: P ={
         
         
         nombre: '',
         descripcion: '',
         imagenes_url: '',
         calificacion: '',
         estado: '',
         id_parque: '',
             
                
        }
        constructor(private formBuilder: FormBuilder,
          private servi:  ServiciopicService ,
          private Router: Router,
          private route: ActivatedRoute,
          private router: Router) { }
    

          ngOnInit(): void {
            this.id = this.route.snapshot.params['id'];
            this.servi.getu(this.id).subscribe(resultado =>{
            this.editarpic=resultado;
      
     });
      }
    /*  guardar({value, valid}: {value:P, valid: boolean}){
   
        value.id = this.id;
        this.servi.update(value,this.id);  
        this.servi.ObtenerJson();
        //this.route.navigate(['/']);
      
    }*/

    guardar({value, valid}: {value:P, valid: boolean}){
   
      if(this.editarpic.nombre=='' || this.editarpic.descripcion=='' 
        ||this.editarpic.imagenes_url=='' || this.editarpic.id_parque==''){
        console.log(this.editarpic.nombre);
              Swal.fire(
    'Por favor llene todos los campos!',
    'Usuario no  Editado!',
    'error'
  )
      }
      
      else{
   
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
        'El Pictograma ha sido Actualizado ',
        'success'
       
      )
         value.id= this.id;
         this.router.navigateByUrl("/admin/pictogramas")
        
     this.servi.update(value,this.id);
    }
  })
         
       
      }
     
       
    
      
    }
  
  

}
