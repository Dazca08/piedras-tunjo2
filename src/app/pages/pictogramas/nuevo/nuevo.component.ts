import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Pictograma } from '../../../interfaces/pictograma.interface';
import { PictogramaService } from 'src/app/services/pictograma.service';
import { Router } from '@angular/router';
import { ImagesService } from '../../../services/images.service';
import { basicAnimate } from '../../../animations';
import { Coordenada } from '../../../interfaces/coordenada.interface';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-nuevo',
  templateUrl: './nuevo.component.html',
  styleUrls: ['./nuevo.component.css'],
  animations: [
    basicAnimate
  ]
})
export class NuevoComponent implements OnInit {

  formPic: FormGroup;
  files: File[] = [];
  coordenada: Coordenada = undefined;
  enviando = false;

  constructor(
    private fb: FormBuilder,
    private pictogramaService: PictogramaService,
    private imagesService: ImagesService,
    private router: Router
  ) { }

  ngOnInit() {
    // Inicializar el ReactiveForm
    this.formPic = this.fb.group({
      Nombre: ['', Validators.required], // en HTML formControlName="Nombre" en el input
      Descripcion: ['', Validators.required]  // formControlName="Descripcion"
    });
  }

  onChangeFile(files: File[]) {
    this.files = files;
  }

  async onSubmit() {
    const ImagenesUrl = await this.imagesService.uploadMultipleImages(this.files, 'picto');
    if (ImagenesUrl !== '') {
      const pictogram: Pictograma = {
        ... this.formPic.value,  // toma Nombre y Descripcion y los agrega al nuevo objeto
        ... this.coordenada,   // contiene Latitud y Longitud
        ImagenesUrl
      };
      console.log(ImagenesUrl);
      const creado = await this.pictogramaService.agregar(pictogram);
      if (creado) {
        this.router.navigateByUrl('/pictogramas');
      }
    }
  }

  // async onSubmit() {
  //   Swal.fire({
  //     title: 'Espere por favor',
  //     text: 'Guardando información',
  //     icon: 'info',
  //     allowOutsideClick: false
  //   });
  //   Swal.showLoading();
  //   this.imagesService.uploadMultipleImages(this.files, 'picto')
  //                     .then(ImagenesUrl => {
  //                       if (ImagenesUrl !== '') {
  //                         const pictogram: Pictograma = {
  //                           ... this.formPic.value,  // toma Nombre y Descripcion y los agrega al nuevo objeto
  //                           ... this.coordenada,   // contiene Latitud y Longitud
  //                           ImagenesUrl
  //                         };
  //                         this.pictogramaService.agregar(pictogram).then(creado => {
  //                           console.log(creado);
  //                           if (creado) {
  //                             this.router.navigateByUrl('/pictogramas');
  //                           }
  //                         });
  //                       }
  //                       Swal.close();
  //                     });
  // }

  getValidationClass(nameControl: string) {
    const control = this.formPic.get(nameControl);
    if (control.untouched && control.pristine) {
      return {};
    }
    return {'is-valid': control.valid, 'is-invalid': control.invalid};
  }

  // getters para acceder a los atributos del form
  get nombre() {
    return this.formPic.get('Nombre');
  }

  get descripcion() {
    return this.formPic.get('Descripcion');
  }

}
