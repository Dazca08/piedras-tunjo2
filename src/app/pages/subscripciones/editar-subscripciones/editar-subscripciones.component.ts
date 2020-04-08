import { Component, OnInit } from '@angular/core';
import { ServicioSubService } from '../servicio-sub.service';
import { FormBuilder } from '@angular/forms';

import { Subscripciones } from '../subscripcion.model';
import { Router,ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-editar-subscripciones',
  templateUrl: './editar-subscripciones.component.html',
  styleUrls: ['./editar-subscripciones.component.css']
})
export class EditarSubscripcionesComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,
    private servi:  ServicioSubService ,
    private Router: Router,
    private route: ActivatedRoute,
    private router: Router) { }
   
    id:string;
    editsub: Subscripciones[];
    editarsub: Subscripciones ={                  
    id_subscripcion: '',
    subscripcion: '',
    contenidoSubscripcion: '',
    valorSubscripcion: '',
    imagen_Subscripcion: '',
    estado: ''                                 
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.servi.getu(this.id).subscribe(resultado =>{
    this.editarsub=resultado;

  });
}
/*
  guardar({value, valid}: {value:Subscripciones, valid: boolean}){
   
    value.id_subscripcion = this.id;
    this.servi.update(value,this.id);  
    this.servi.ObtenerJson();
    //this.route.navigate(['/']);
  
}
  */


  guardar({value, valid}: {value:Subscripciones, valid: boolean}){
   
    if(this.editarsub.subscripcion=='' || this.editarsub.contenidoSubscripcion=='' 
      ||this.editarsub.valorSubscripcion=='' || this.editarsub.imagen_Subscripcion==''){
      console.log(this.editarsub.subscripcion);
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
      'La subscripcion ha sido Actualizada ',
      'success'
     
    )
       value.id_subscripcion = this.id;
       
      
    this.servi.update(value,this.id);
    this.router.navigateByUrl("/admin/ver_subs");
    
  }

})
       
     
    }
   
     
  
    
  }











}
