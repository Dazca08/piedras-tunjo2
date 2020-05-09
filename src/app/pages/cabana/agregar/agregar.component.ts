import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Cabana } from 'src/app/interfaces/cabana.interface';
import { ImagesService } from '../../../services/images.service';
import { CabanasService } from '../../../services/cabanas.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

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
      Precio: [1000, [Validators.required]],
      Capacidad: [1, [Validators.required]],
    });
  }

  async enviarForm() {
    const { Precio, Capacidad } = this.formCabana.value;
    // VALIDACIONES
    // required valida que los campos sean númericos
    // rangos
    if (Number(Precio) < 1000) {
      this.presentAlert('Error', 'El precio debe ser mayor o igual a 1000 COP', 'error');
      return;
    }
    if (Number(Capacidad) < 1) {
      this.presentAlert('Error', 'La capacidad no puede ser cero ni negativa', 'error');
      return;
    }
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

  presentAlert(title: any, text: any, icon: any) {
    Swal.fire({ title, text, icon });
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
