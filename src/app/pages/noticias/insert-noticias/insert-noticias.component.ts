import { Component, OnInit ,ViewChild} from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule,NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Noticias } from '../noticias.model';
import { ServicioNoticiasService } from '../servicio-noticias.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-insert-noticias',
  templateUrl: './insert-noticias.component.html',
  styleUrls: ['./insert-noticias.component.css']
})
export class InsertNoticiasComponent implements OnInit {
  control:string='noticia';
  noticias: Noticias[];
  noti: Noticias ={
    titulo: '',
    fechaPublicacion: Date.now().toString(),
    descripcion: '',
    imagenesUrl: ''
  }

  @ViewChild("insertarnotForm") insertarnotForm:FormGroup;
  public respuestaImagenEnviada;
  public resultadoCarga;

  constructor(private formBuilder: FormBuilder,
    private servi: ServicioNoticiasService ,
    Router: Router  ) { }

  agregar({value, valid}: {value: Noticias, valid: boolean}){
    console.log(this.selectedfile)
    console.log(this.noti.imagenesUrl)

    if(this.noti.fechaPublicacion ==""){
      console.log('Error');
      console.log('error seleccione una Fecha');
      Swal.fire(
      'Por favor seleccione una fecha de publicacion para la Noticia !',
      'Fallo al agregar la notica!',
      'error'
    )
    }else if(this.selectedfile==null){
      console.log('error seleccione una imagen');
      Swal.fire(
        'Por favor suba una Imagen para la noticia !',
        'Fallo al agregar la notica!',
        'error'
      )
    }else if(this.noti.fechaPublicacion=='' || this.noti.titulo=='' || this.noti.descripcion==''){
      console.log('Debe llenar todos los campos')
      Swal.fire(
        'Todos los campos son requeridos, por favor llenelos!',
        'Fallo al agregar la notica!',
        'error'
      )
    }else{
      this.servi.insertar(value)
      this.cargandoImagen();
      this.selectedfile=null;
      this.refrescar();

      Swal.fire(
        'Evento agregado con exito!',
        'Evento Agregado!',
        'success'
      )
    }
  }

  selectedfile:File=null;

  onFileSelected(noti){
    console.log(this.control)
    this.selectedfile=<File>noti.target.files[0];
    this.noti.imagenesUrl=this.selectedfile.name.toString();
    console.log("Nueva imagen"+this.control)
  }

  public cargandoImagen(){
    console.log("Entra a cargar img");
    this.servi.postFileImagen(this.selectedfile).subscribe(response => {
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
    );
  }

  refrescar(){
   this.noti.titulo="";
   this.noti.fechaPublicacion= Date.now().toString();
   this.noti.descripcion="";
   this.noti.imagenesUrl="";
  }


  ngOnInit(): void {
  }

}
