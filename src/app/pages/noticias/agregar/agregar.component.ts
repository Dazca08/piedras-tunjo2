import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NoticiasService } from '../../../services/noticias.service';
import { ImagesService } from '../../../services/images.service';
import { Noticia } from 'src/app/interfaces/noticia.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  formNoticia: FormGroup;
  files: File[] = [];

  constructor(
    private fb: FormBuilder,
    private noticiasService: NoticiasService,
    private imagesService: ImagesService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.formNoticia = this.fb.group({
      titulo: ['', Validators.required],
      descripcion: ['', Validators.required]
    });
  }

  async onSubmit() {
    // console.log(this.formCabana.value);
    const imagenesUrl = await this.imagesService.uploadMultipleImages(this.files, 'noticia');
    console.log(imagenesUrl);
    if (imagenesUrl !== '') {
      const noticia: Noticia = {
        ... this.formNoticia.value,
        calificacion: 0,
        estado: 1,
        imagenesUrl
      };
      console.log(imagenesUrl)
      const creado = await this.noticiasService.agregarNoticia(noticia);
      if (creado) {
        this.router.navigateByUrl('/noticias');
      }
    }
  }

  onChangeFile(files: File[]){
    this.files = files;
  }

  getValidationClass(nameControl: string) {
    const control = this.formNoticia.get(nameControl);
    if (control.untouched && control.pristine) {
      return {};
    }
    return {'is-valid': control.valid, 'is-invalid': control.invalid};
  }

  get titulo() {
    return this.formNoticia.get('titulo');
  }

  get descripcion() {
    return this.formNoticia.get('descripcion');
  }

}
