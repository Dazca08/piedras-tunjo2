import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';

@Component({
  selector: 'app-nuevo',
  templateUrl: './nuevo.component.html',
  styleUrls: ['./nuevo.component.css']
})
export class NuevoComponent implements OnInit {

  idPuntosInteres: number[] = [];
  ruta: any[] = [];
  nombre = '';

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      console.log(form.value);
      console.log(this.ruta);
      console.log(this.idPuntosInteres);
    }
  }

  getValidationClass(model: NgModel) {
    if (model.untouched && model.pristine) {
      return {};
    }
    return {'is-valid': model.valid, 'is-invalid': model.invalid};
  }

}
