import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PictogramaService } from '../../../services/pictograma.service';
import { Pictograma } from '../../../interfaces/pictograma.interface';
import { ImagesService } from '../../../services/images.service';
import { basicAnimate } from '../../../animations';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css'],
  animations: [
    basicAnimate
  ]
})
export class EditarComponent implements OnInit {

  formEditPic: FormGroup;
  pictogram: Pictograma;
  files: File[] = [];

  constructor(
    private pictogramService: PictogramaService,
    private route: ActivatedRoute,
    private imageService: ImagesService,
    private fb: FormBuilder,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.cargarPictograma();
  }

  onChangeFile(files: File[]) {
    this.files = files;
  }

  async onSubmit() {
    const { Nombre, Descripcion } = this.formEditPic.value;
    this.pictogram.Nombre = Nombre;
    this.pictogram.Descripcion = Descripcion;

    // nuevas imagenes
    if (this.files.length > 0) {
      const imagenesUrl = await this.imageService.uploadMultipleImages(this.files, 'picto');
      // Eliminar imagenes anterioriores
      this.imageService.deleteImages(this.pictogram.ImagenesUrl, 'picto');
      this.pictogram.ImagenesUrl = imagenesUrl;
    }
    const actualizado = await this.pictogramService.actualizar(this.pictogram);
    if (actualizado) {
      this.router.navigateByUrl('/pictogramas');
    }
  }

  cargarPictograma() {
    const id = this.route.snapshot.paramMap.get('id');
    this.pictogramService.buscar(Number(id))
                        .then(res => {
                          this.pictogram = res;
                          this.formEditPic = this.fb.group({
                            Nombre: [res.Nombre, Validators.required],
                            Descripcion: [res.Descripcion, Validators.required]
                          });
                        });
  }

  get nombre() {
    return this.formEditPic.get('Nombre');
  }

  get descripcion() {
    return this.formEditPic.get('Descripcion');
  }

  getValidationClass(nameControl: string) {
    const control = this.formEditPic.get(nameControl);
    if (control.untouched && control.pristine) {
      return {};
    }
    return {'is-valid': control.valid, 'is-invalid': control.invalid};
  }

}
