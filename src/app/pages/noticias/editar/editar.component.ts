import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ImagesService } from '../../../services/images.service';
import { NoticiasService } from '../../../services/noticias.service';
import { Noticia } from 'src/app/interfaces/noticia.interface';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  formEditNoticia: FormGroup;
  noticia: Noticia = undefined;
  files: File[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private imagesService: ImagesService,
    private noticiasService: NoticiasService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.prepareUpdate();
  }

  async prepareUpdate() {
    const id = this.route.snapshot.paramMap.get('id');
    this.noticiasService.getNoticia(Number(id))
                        .then(res => {
                          this.noticia = res;
                          this.formEditNoticia = this.fb.group({
                            titulo: [res.titulo, Validators.required],
                            descripcion: [res.descripcion, Validators.required]
                          });
                        });
  }

  onChangeFile(files: File[]) {
    this.files = files;
  }

  async onSubmit() {
    // console.log(this.formEditCabana.value);
    const { titulo, descripcion } = this.formEditNoticia.value;
    this.noticia.titulo = titulo;
    this.noticia.descripcion = descripcion;

    // nuevas imagenes
    if (this.files.length > 0) {
      const imagenesUrl = await this.imagesService.uploadMultipleImages(this.files, 'noticia');
      // Eliminar imagenes anteriores
      this.imagesService.deleteImages(this.noticia.imagenesUrl, 'noticia');
      this.noticia.imagenesUrl = imagenesUrl;
    }
    const actualizado = await this.noticiasService.actualizarNoticia(this.noticia);
    if (actualizado) {
      this.router.navigateByUrl('/noticias');
    }
  }

  getValidationClass(nameControl: string) {
    const control = this.formEditNoticia.get(nameControl);
    if (control.untouched && control.pristine) {
      return {};
    }
    return {'is-valid': control.valid, 'is-invalid': control.invalid};
  }

  get titulo() {
    return this.formEditNoticia.get('titulo');
  }

  get descripcion() {
    return this.formEditNoticia.get('descripcion');
  }

}
