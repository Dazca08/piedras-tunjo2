import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Pictograma } from '../../../interfaces/pictograma.interface';
import { PictogramaService } from 'src/app/services/pictograma.service';
import { Router } from '@angular/router';
import { ImagesService } from '../../../services/images.service';
import * as uuid from 'uuid';

@Component({
  selector: 'app-nuevo',
  templateUrl: './nuevo.component.html',
  styleUrls: ['./nuevo.component.css']
})
export class NuevoComponent implements OnInit {

  @ViewChild('fileUpload', { static: false }) fileUpload: ElementRef;
  formPic: FormGroup;
  filename: string;

  constructor(
    private fb: FormBuilder,
    private pictogramaService: PictogramaService,
    private imagesService: ImagesService,
    private router: Router
  ) { }

  ngOnInit() {
    this.formPic = this.fb.group({
      Nombre: ['', Validators.required],
      Descripcion: ['', Validators.required]
    });
  }

  onChangeFile(event: any) {
    if (event.target.files.length > 0) {
      this.filename = event.target.files[0].name;
    } else {
      this.filename = undefined;
    }
  }

  async onSubmit() {
    const file = this.fileUpload.nativeElement.files[0];
    const blob = file.slice(0, file.size, 'image/*');
    const uuidName = uuid.v4() + this.filename;
    const newFile = new File([blob], uuidName, {type: 'image/*'});

    const pictogram: Pictograma = {
      ... this.formPic.value,
      ImagenesUrl: uuidName
    };
    const creado = await this.pictogramaService.agregar(pictogram);
    if (creado) {
      const upload = await this.imagesService.imageUpload(newFile, 'picto');
      if (upload) {
        this.router.navigateByUrl('/pictogramas');
      }
    }
  }

  getValidationClass(nameControl: string) {
    const control = this.formPic.get(nameControl);
    if (control.untouched && control.pristine) {
      return {};
    }
    return {'is-valid': control.valid, 'is-invalid': control.invalid};
  }

  get nombre() {
    return this.formPic.get('Nombre');
  }

  get descripcion() {
    return this.formPic.get('Descripcion');
  }

}