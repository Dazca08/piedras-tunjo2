import { Component, OnInit } from '@angular/core';
import { Router,} from '@angular/router';
import { ServiciopromService } from 'src/app/services/servicioprom.service';
import { prom } from 'src/app/pages/promociones/promocion.model';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import Swal from 'sweetalert2';
import {  ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-editarprom',
  templateUrl: './editarprom.component.html',
  styleUrls: ['./editarprom.component.css']
})
export class EditarpromComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,
    private servi: ServiciopromService,
    Router: Router,
    private route: ActivatedRoute,
    private router: Router) { }
    promo: prom[];  
        
    editarprom: prom ={
     id:"",
     nombre: "",
     descripcion: "",
     precio: "",    
    }
  id:string;

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.servi.getu(this.id).subscribe(resultado =>{
    this.editarprom=resultado;

});
}


guardar({value, valid}: {value: prom , valid: boolean}){
   
  if(this.editarprom.nombre=='' || this.editarprom.descripcion=='' 
    ||this.editarprom.precio==''){
    console.log(this.editarprom.nombre);
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
    'La promocion ha sido Actualizada ',
    'success'
   
  )
     value.id= this.id;
    // this.router.navigateByUrl("/admin/promociones")
    
     this.servi.update(value,this.id);
}
})
     
   
  }
 
   

  
}

}
