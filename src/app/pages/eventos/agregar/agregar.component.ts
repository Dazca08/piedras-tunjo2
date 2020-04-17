import { Component, OnInit ,ViewChild} from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule,NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Evento } from '../inicio-a/evento.model';
import { ServicioEventoService } from '../servicio-evento.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {
k:string='soy k :v';
eventos: Evento[];
  evento: Evento ={
    Nombre: '',
    FechaPublicacion: Date.now().toString(),
     Fecha: '',
    Descripcion: '',
     Calificacion: '',
    ImagenesUrl:'',
     ComentariosId: '',
    ListaComentariosEvento: '',
    
   
  }
 @ViewChild("eventoForm") eventoForm:FormGroup;
   
  constructor(private formBuilder: FormBuilder,
      private servi: ServicioEventoService ,
      Router: Router  ) { }

agregar({value, valid}: {value: Evento, valid: boolean}){
 console.log(this.evento.ImagenesUrl)
console.log(this.selectedfile)

 console.log(this.evento.ImagenesUrl)
 if(this.evento.Fecha ==""){
   console.log('error');
  console.log('error seleccione una Fecha');
                     Swal.fire(
  'Por favor seleccione una  fecha para el evento !',
  'evento no  Agregado!',
  'error'
)
 }
 else if(this.selectedfile==null){
  console.log('error seleccione una imagen');
                     Swal.fire(
  'Por favor suba una imagen !',
  'evento no  Agregado!',
  'error'
)
 }
 else if(this.evento.Calificacion=='' || this.evento.Descripcion=='' || this.evento.Nombre==''){
   console.log('llene todos los campos')
             Swal.fire(
  'Por favor llene todos los campos!',
  'evento no  Agregado!',
  'error'
)
 }
 else if(this.evento.Calificacion=='0'){
 console.log('La calificacion del evento no puede ser cero')
             Swal.fire(
  ' el valor de la calificacion! no puede ser cero',
  'evento no  Agregado!',
  'error')
 }


 else{
this.servi.insertar(value)
this.cargandoImagen();
this.selectedfile=null;
this.refrescar();

                   Swal.fire(
  'Evento agregado con exito!',
  'Evento Agregado!',
  'success'
)
    //this.eventoForm.reset();

}
 
//this.eventoForm.resetForm();
  }
selectedfile:FileList=null;
i:number=0;
onFileSelected(evento){


//this.selectedfile=<FileList>evento.target.files;
this.selectedfile=evento;
for(this.i=0;this.i<this.selectedfile.length;this.i++){
  this.evento.ImagenesUrl=this.evento.ImagenesUrl+this.selectedfile[this.i].name.toString()+"@";
}


console.log(this.evento.ImagenesUrl);
}
refrescar(){
 this.evento.Nombre="";
this.evento.FechaPublicacion= Date.now().toString();
this.evento.Fecha="";
this.evento.Descripcion="";
this.evento.Calificacion="";
this.evento.ImagenesUrl="";
this.evento.ComentariosId="";
this.evento.ListaComentariosEvento="";
}

   public cargandoImagen(){
  //console.log("si entro");
  console.log(this.selectedfile.length)
 for(this.i=0;this.i<this.selectedfile.length;this.i++){
   this.servi.postFileImagen(this.selectedfile[this.i]).subscribe();
 }
    
  }

  ngOnInit(): void {
    

  }

}
