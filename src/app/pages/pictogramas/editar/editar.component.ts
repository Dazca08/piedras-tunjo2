import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PictogramaService } from '../../../services/pictograma.service';
import { Pictograma } from '../../../interfaces/pictograma.interface';
import { ImagesService } from '../../../services/images.service';
import * as uuid from 'uuid';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  @ViewChild('fileUpload', { static: false }) fileUpload: ElementRef;
  formEditPic: FormGroup;
  pictogram: Pictograma;
  filename: string;

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

  onChangeFile(event: any) {
    if (event.target.files.length > 0) {
      this.filename = event.target.files[0].name;
    } else {
      this.filename = undefined;
    }
  }

  async onSubmit() {
    const { Nombre, Descripcion } = this.formEditPic.value;
    this.pictogram.Nombre = Nombre;
    this.pictogram.Descripcion = Descripcion;

    if (this.pictogram.ImagenesUrl !== this.filename) {
      const file = this.fileUpload.nativeElement.files[0];
      const blob = file.slice(0, file.size, 'image/*');
      const uuidName = uuid.v4() + this.filename;
      const newFile = new File([blob], uuidName, {type: 'image/*'});
      const upload = await this.imageService.imageUpload(newFile, 'picto');
      // ImagenesUrl
      this.pictogram.ImagenesUrl = uuidName;
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
                          this.filename = res.ImagenesUrl;
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
