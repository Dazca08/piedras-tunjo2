
import { Component, OnInit,ViewChild } from '@angular/core';
import { ConfiguracionService } from 'src/app/services/configuracion.service';
import { ConfiguracionP } from 'src/app/interfaces/configuracion.interface';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule, FormsModule, NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-configuracion',
  templateUrl: './configuracion.component.html',
  styleUrls: ['./configuracion.component.css']
})
export class ConfiguracionComponent implements OnInit {
  configuracion: any;
  descripcion = '';

  constructor(
    private FormBuilder: FormBuilder,
    private configuracions: ConfiguracionService,
    private router: Router
  ) { }
    
  ngOnInit(): void {
    this.ObtenerTermino();
  }

  async ObtenerTermino(){
    this.configuracion = await this.configuracions.ObtenerTermino();
    this.descripcion = this.configuracion.descripcion;
  }

  actualizar(form: NgForm){
    const { descripcion } = form.value;
    // console.log(descripcion);
    this.configuracion.descripcion = descripcion;
    Swal.fire({
      title: '¿Esta seguro?',
      text: "¿Desea guardar los cambios?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Guardar!'
    }).then(async (result) => {
      if (result.value) {
        const ok = await this.configuracions.update(this.configuracion, 8);
        if (ok === true) {
          Swal.fire(
            'Guardado!',
            'Los terminos y condiciones se actualizaron',
            'success'
          )          
          this.refrescar();
        }
      }
    });
  }

  refrescar(){
    this.ObtenerTermino();
  }

}
