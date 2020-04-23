import { Component, OnInit,ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { ServicioLService } from '../servicio-l.service';
import { Router , ActivatedRoute} from '@angular/router';
import { Pregunta } from '../inicio-p/pregunta.model';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-agregar-p',
  templateUrl: './agregar-p.component.html',
  styleUrls: ['./agregar-p.component.css']
})
export class AgregarPComponent implements OnInit {
preguntas: Pregunta[];
preguntastemp:Pregunta[];
  pregunta: Pregunta ={
    nombre: '',
    descripcion: '',
   
  }
     i :number=0;
   @ViewChild("preguntaForm") preguntaForm: FormGroup;
  constructor(private formBuilder: FormBuilder,
      private servi: ServicioLService,
      Router: Router, ) { }
agregar({value, valid}: {value: Pregunta, valid: boolean}){ 
    //this.bandera=false;
      if(value.nombre=='' || value.descripcion==''){
            Swal.fire(
                  'Por favor llene todos los campos!',
                  'Pregunta no  Agregada!',
                  'error'
                     )
      }

      else if(value.nombre.length<5 || value.descripcion.length<10){
          Swal.fire(
           'La pregunta debe tener minimo 5 caracteres y la descripcion 10',
           'Pregunta no agregada',
           'error'

            )
      }
      else{

      this.comparacion( value);
    
       
      }

      
  }
  refrescar(){
   this.pregunta.nombre="";
   this.pregunta.descripcion=""; 
  }
  
    
  comparacion( value){
    var bandera="no existe"
     this.servi.ObtenerJson().subscribe(resultado =>{
   this.preguntastemp=resultado;
 
   for(this.i=0;this.i<this.preguntastemp.length;this.i++){
         if(value.descripcion.toLowerCase()==this.preguntastemp[this.i].descripcion.toLowerCase()  ){
    
          bandera="existe";
         }
         else if(value.nombre.toLowerCase()==this.preguntastemp[this.i].nombre.toLowerCase() ){
          bandera="existe p";
         }

  
   }
   console.log(bandera)
   if(bandera=="existe"){
        Swal.fire(
           'La descripcion  ya existe para otra pregunta',
           'Pregunta no agregada',
           'error'
            
             )
   }
   else if(bandera=="existe p"){
           Swal.fire(
           'La pregunta  ya existe ',
           'Pregunta no agregada',
           'error'
            
             )
   }
   else{
          this.servi.insertar(value);
           this.refrescar();
                         Swal.fire(
                    'Pregunta agregada con exito!',
                    'Pregunta agregada!',
                    'success'
                                  )
   }
 })
  ;
  } 

  ngOnInit(): void {

  }

}
