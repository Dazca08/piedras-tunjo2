import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ServicioNoticiasService } from '../servicio-noticias.service';
import { Noticias } from '../noticias.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editar-noticias',
  templateUrl: './editar-noticias.component.html',
  styleUrls: ['./editar-noticias.component.css']
})
export class EditarNoticiasComponent implements OnInit {

  id:string;
  control:string='noticia';
  noticias: Noticias[];
  noti: Noticias ={
  titulo: '',
  descripcion: '',
  fechaPublicacion: Date.now().toString(),
  imagenesUrl: this.control
  }

  constructor(private formBuilder: FormBuilder,
    private servi: ServicioNoticiasService ,
    private Router: Router,
    private route: ActivatedRoute) { }


  public respuestaImagenEnviada;
  public resultadoCarga;
  selectedfile:File=null;
  imagen_actual:string="";

  onFileSelected(noticia){
    console.log(this.imagen_actual)
    this.selectedfile=<File>noticia.target.files[0];
    this.imagen_actual=this.selectedfile.name.toString();
    console.log("nueva imagen actual "+this.imagen_actual)
    this.noti.imagenesUrl=this.imagen_actual;
  }


  guardar({value, valid}: {value:Noticias, valid: boolean}){

    console.log(this.imagen_actual)
    console.log(this.noti.imagenesUrl)
    console.log(this.id);
    if(this.noti.fechaPublicacion == ""){
      console.log('error');
      console.log('error Seleccione una Fecha');
      Swal.fire(
        'Por favor seleccione una fecha de publicacion para la noticia!',
        'Fallo en edicion de noticia!',
        'error'
      )
    }else if(this.noti.imagenesUrl == ''){
      console.log('error Seleccione una imagen');
      Swal.fire(
        'Por favor suba una Imagen !',
        'Fallo en edicion de noticia!',
        'error'
      )
    }else if(this.noti.titulo == '' || this.noti.descripcion == ''){
      console.log('Debe llenar todos los campos')
      Swal.fire(
        'Debe llenar todos los campos',
        'Fallo en edicion de noticia!',
        'error'
      )
    }else{
        Swal.fire({
          title: '¿Esta seguro?',
          text: "¿Desea guardar los cambios?",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Guardar!'
        }).then((result) => {
          if (result.value) {
            Swal.fire(
              'Guardado!',
              'La Noticia ha sido Actualizada',
              'success'
            )
            value.id = this.id;
            this.servi.update(value,this.id);
            //this.Router.navigate(['/editarevento/'+this.id])
            this.cargandoImagen();
            this.refrescar(this.id);
          }
        })
    }
  }

  public cargandoImagen(){
    console.log("cargar img");
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
    });
  }

  refrescar(id){
    this.id = this.route.snapshot.params['id'];
    this.servi.getu(this.id).subscribe(resultado =>{
      this.noti=resultado;
      this.imagen_actual="http://piedrasdeltunjo.tk/images/getImage?tipo=noticias&nombre="+this.noti.imagenesUrl;
      });
    this.ngOnInit();
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.servi.getu(this.id).subscribe(resultado =>{
      this.noti=resultado;
      this.imagen_actual="http://piedrasdeltunjo.tk/images/getImage?tipo=noticias&nombre="+this.noti.imagenesUrl;
    });
  }



}
