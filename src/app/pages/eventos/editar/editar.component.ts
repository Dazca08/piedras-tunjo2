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

  selectedfile:File=null;

fechatemp:string="";
rutaImagen:string="";
imagen:string="";

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




  }
  onFileSelected(evento){
  console.log(this.Vtemp)
this.selectedfile=<File>evento.target.files[0];
this.Vtemp=this.selectedfile.name.toString();
console.log("new Vtemp "+this.Vtemp)
    this.evento.ImagenesUrl=this.Vtemp;
}

     guardar({value, valid}: {value:Evento, valid: boolean}){
    console.log(this.evento.ImagenesUrl)
    console.log(this.Vtemp)

    console.log(this.evento.ImagenesUrl)
  console.log(this.id);
  if(this.evento.Fecha ==""){
   console.log('error');
  console.log('error seleccione una Fecha');
                     Swal.fire(
  'Por favor seleccione una  fecha para el evento !',
  'evento no  Editado!',
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
 else if(this.evento.Calificacion=='' || this.evento.Descripcion=='' || this.evento.Nombre==''){
   console.log('llene todos los campos')
             Swal.fire(
  'Por favor llene todos los campos!',
  'evento no  Editado!',
  'error'
)
 }
 else if(this.evento.Calificacion=='0'){
 console.log('La calificacion del evento no puede ser cero')
             Swal.fire(
  ' el valor de la calificacion! no puede ser cero',
  'evento no  Editado!',
  'error')
 }

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



    

    
  
   public cargandoImagen(){
    


  console.log("si entro");
  this.servi.postFileImagen(this.selectedfile).subscribe(

      response => {
        this.respuestaImagenEnviada = response; 
        if(this.respuestaImagenEnviada <= 1){
          console.log("Error en el servidor"); 
        }else{

          if(this.respuestaImagenEnviada.code == 200 && this.respuestaImagenEnviada.status == "success"){
             console.log("enviada");
            this.resultadoCarga = 1;

          }else{
            this.resultadoCarga = 2;
          }

        }
      },
      error => {
        console.log(<any>error);
      }

    );//FIN DE METODO SUBSCRIBE


    
  }
refrescar(id){
 

 //this.usuarios=this.usuarios.filter(x=>x.Id==id);
    this.id = this.route.snapshot.params['id'];
      this.servi.getu('/'+this.id).subscribe(resultado =>{
 this.evento=resultado;
  this.rutaImagen="http://piedrasdeltunjo.tk/images/getImage?tipo=evento&nombre="+this.evento.ImagenesUrl;

 });
  this.ngOnInit();

  this.ngOnInit();
}
 


}
