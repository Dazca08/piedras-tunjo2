import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CabanasService } from '../../../services/cabanas.service';
import { Cabana } from 'src/app/interfaces/cabana.interface';
import { ImagesService } from '../../../services/images.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {
  formEditCabana: FormGroup;
  cabana: Cabana = undefined;
  files: File[] = [];

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private imagesService: ImagesService,
    private cabanasService: CabanasService,
  ) { }

  ngOnInit(): void {
    this.buildForm();
  }

  async buildForm() {
    const id = this.route.snapshot.paramMap.get('id');
    this.cabanasService.getCabana(Number(id))
                        .then(cab => {
                          this.cabana = cab;
                          this.formEditCabana = this.fb.group({
                            Nombre: [cab.Nombre, Validators.required],
                            Precio: [cab.Precio, Validators.required],
                            Capacidad: [cab.Capacidad, Validators.required]
                          });
                        });
                
  }

  getValidationClass(nameControl: string) {
    const control = this.formEditCabana.get(nameControl);
    if (control.untouched && control.pristine) {
      return {};
    }
    return {'is-valid': control.valid, 'is-invalid': control.invalid};
  }

  onChangeFile(files: File[]) {
    this.files = files;
  }

  async onSubmit(){
    // console.log(this.formEditCabana.value);
    const { Nombre, Precio, Capacidad } = this.formEditCabana.value;
    this.cabana.Nombre = Nombre;
    this.cabana.Precio = Precio;
    this.cabana.Capacidad = Capacidad;

    // nuevas imagenes
    if (this.files.length > 0) {
      const imagenesUrl = await this.imagesService.uploadMultipleImages(this.files, 'cabana');
      // Eliminar imagenes anterioriores
      this.imagesService.deleteImages(this.cabana.ImagenesUrl, 'cabana');
      this.cabana.ImagenesUrl = imagenesUrl;
    }
    const actualizado = await this.cabanasService.update(this.cabana);
    if (actualizado) {
      this.router.navigateByUrl('/cabanas');
    }
  }

  get nombre() {
    return this.formEditCabana.get('Nombre');
  }

  get precio() {
    return this.formEditCabana.get('Precio');
  }

  get capacidad() {
    return this.formEditCabana.get('Capacidad');
  }
}
