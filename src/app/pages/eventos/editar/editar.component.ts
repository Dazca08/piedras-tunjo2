import { Component, OnInit } from '@angular/core';
import { ServicioEventoService } from '../servicio-evento.service';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Evento } from '../inicio-a/evento.model';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {
 id:string;
 Vtemp:string="";
eventos: Evento[];
  evento: Evento ={
    Nombre: '',
    FechaPublicacion: '',
     Fecha: '',
    Descripcion: '',
     Calificacion: '',
    ImagenesUrl: this.Vtemp,
     ComentariosId: '',
    ListaComentariosEvento: '',

   
  }
  constructor(private formBuilder: FormBuilder,
      private servi:  ServicioEventoService ,
      private Router: Router,
       private route: ActivatedRoute) { }

    public respuestaImagenEnviada;
    public resultadoCarga;



fechatemp:string="";
rutaImagen:string="";
imagen:string="";
 fechaActual:any;
   fechaActualtemp:any;
   fechaEvento:any;
   resultadoComparacion:any;
  ngOnInit(): void {
     this.id = this.route.snapshot.params['id'];
      this.servi.getu('/'+this.id).subscribe(resultado =>{
 this.evento=resultado;
 this.fechatemp=this.evento.Fecha;
     var splitted = this.fechatemp.split("T", 2); 
    // console.log(splitted)
      this.fechatemp=splitted[0];
      this.evento.Fecha=this.fechatemp;
       if(this.evento.ImagenesUrl.includes('@' , 0)==true){
             console.log(this.evento.ImagenesUrl);
             this.imagen=this.evento.ImagenesUrl;
             var split=this.imagen.split("@");
             console.log(split);
             this.imagen=split[0];
             this.evento.ImagenesUrl=this.imagen;
      }
  this.rutaImagen="http://piedrasdeltunjo.tk/images/getImage?tipo=evento&nombre="+this.evento.ImagenesUrl;

 });



  this.FechaActual()
  }

   FechaActual(){
  var hoy = new Date();
  var dd=hoy.getDate();
  var mm=hoy.getMonth()+1;
  var yyyy=hoy.getFullYear();
 dd=this.agregarCero(dd);
 mm=this.agregarCero(mm);
  this.fechaActual=yyyy+'-'+mm+'-'+dd;
 
  }

  agregarCero(i){
  if(i<10){
    i="0"+i;
  }
  return i
  }

splitfecha(fecha){
var split=fecha.split('-')
return split
}

Comparacion(fecha , fechaactual){
var añofe=parseInt(fecha[0],10);
var añofa=parseInt(fechaactual[0],10)
var me=parseInt(fecha[1],10);
var ma=parseInt(fechaactual[1],10)
var de=parseInt(fecha[2],10);
var da=parseInt(fechaactual[2],10)
var resultado="valida";
if(añofe<añofa){

   resultado="invalida";

}
else if(añofe==añofa && me<ma){
 
     resultado="invalida";
   
}
else if(añofe==añofa && me==ma && de<da){

    resultado="invalida";

}
else if(añofe==añofa && me==ma && de==da){

    resultado="invalida";

}

 return resultado;
}

 selectedfile:FileList=null;
i:number=0;
onFileSelected(evento){
//this.selectedfile=<FileList>evento.target.files;
this.selectedfile=evento;
this.evento.ImagenesUrl="";
for(this.i=0;this.i<this.selectedfile.length;this.i++){
  this.evento.ImagenesUrl=this.evento.ImagenesUrl+this.selectedfile[this.i].name.toString()+"@";
}
}
     guardar({value, valid}: {value:Evento, valid: boolean}){

    console.log(this.evento.ImagenesUrl)
    console.log(this.Vtemp)

    console.log(this.evento.ImagenesUrl)
  console.log(this.id);
   this.fechaEvento=this.evento.Fecha
  this.fechaActualtemp=this.fechaActual


this.fechaEvento=this.splitfecha(this.fechaEvento);
this.fechaActualtemp=this.splitfecha(this.fechaActualtemp);
console.log(this.fechaEvento);
this.resultadoComparacion=this.Comparacion(this.fechaEvento,this.fechaActualtemp);
console.log(this.resultadoComparacion)
  if(this.evento.Fecha ==""){
   console.log('error');
  console.log('error seleccione una Fecha');
                     Swal.fire(
  'Por favor seleccione una  fecha para el evento !',
  'evento no  Editado!',
  'error'
)
 }
  else if(this.resultadoComparacion=="invalida"){
       Swal.fire(
  'La fecha del evento debe ser mayor a la fecha actual !',
  'evento no  Agregado!',
  'error'
)
 }
 else if(this.evento.ImagenesUrl==''){
  console.log('error seleccione una imagen');
                     Swal.fire(
  'Por favor suba una imagen !',
  'evento no  Editado!',
  'error'
)
 }
 else if( this.evento.Descripcion=='' || this.evento.Nombre==''){
   console.log('llene todos los campos')
             Swal.fire(
  'Por favor llene todos los campos!',
  'evento no  Editado!',
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
      'El Evento ha sido Actualizado ',
      'success'
     
    )
     value.Id = this.id;
      
   this.servi.update(value,this.id);  
  //this.Router.navigate(['/admin/editarevento/'+this.id])
    this.cargandoImagen();
    this.refrescar(this.id);
  }
})
}

       
   

}



    

    
  
 public cargandoImagen(){
  //console.log("si entro");
  if(this.selectedfile!=null){
    for(this.i=0;this.i<this.selectedfile.length;this.i++){
   this.servi.postFileImagen(this.selectedfile[this.i]).subscribe();
 }
  }
  

    
  }
refrescar(id){
 

 
  this.ngOnInit();

  this.ngOnInit();
}
 


}
