import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Cabana } from 'src/app/interfaces/cabana.interface';
import { ImagesService } from '../../../services/images.service';
import { CabanasService } from '../../../services/cabanas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  formCabana: FormGroup;
  files: File[] = [];

  constructor(
    private fb: FormBuilder,
    private imagesService: ImagesService,
    private cabanasService: CabanasService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.formCabana = this.fb.group({
      Nombre: ['', Validators.required],
      Precio: [1, Validators.required],
      Capacidad: [1, Validators.required]
    });
  }

  async enviarForm() {
    // console.log(this.formCabana.value);
    const ImagenesUrl = await this.imagesService.uploadMultipleImages(this.files, 'cabana');
    if (ImagenesUrl !== '') {
      const cabana: Cabana = {
        ... this.formCabana.value,
        Calificacion: 0,
        ComentariosId: 0,
        ImagenesUrl
      };
      const creado = await this.cabanasService.agregar(cabana);
      if (creado) {
        this.router.navigateByUrl('/cabanas');
      }
    }
  }

  getValidationClass(nameControl: string) {
    const control = this.formCabana.get(nameControl);
    if (control.untouched && control.pristine) {
      return {};
    }
    return {'is-valid': control.valid, 'is-invalid': control.invalid};
  }

  onChangeFile(files: File[]) {
    this.files = files;
  }

  get nombre() {
    return this.formCabana.get('Nombre');
  }

  get precio() {
    return this.formCabana.get('Precio');
  }

  get capacidad() {
    return this.formCabana.get('Capacidad');
  }

}
