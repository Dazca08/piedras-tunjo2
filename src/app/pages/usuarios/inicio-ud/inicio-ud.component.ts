import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule , FormsModule } from '@angular/forms';
import { Usuarios } from '../usuarios.model';
import { ServicioUService  } from '../servicio-u.service';
import { Router, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-inicio-ud',
  templateUrl: './inicio-ud.component.html',
  styleUrls: ['./inicio-ud.component.css']
})
export class InicioUdComponent implements OnInit {
  usuarios: Usuarios[];
  usuario: Usuarios ={
    Id:'',
    Nombre: '',
    Apellido: '',
    TipoDocumento: '',
    NumeroDocumento: '',
    LugarExpedicion: '',
    CorreoElectronico: '',
    Clave: '',
    Icono_url: '',
    VerificacionCuenta: '',
    EstadoCuenta: '',
    RolId: '',
    Imagen_documento: '',
    estadoc: '',

   
  }
  constructor(private servi:ServicioUService ,private route: ActivatedRoute,private Router: Router,) {this.ObtenerUsuarios }
  filterPost ='';
  PageActual:number=1;
  ObtenerUsuarios(){
      this.servi.ObtenerDeshabilitados().subscribe(resultado =>{
      this.usuarios=resultado;
      console.log("Informacion ya tiene resultado");
      console.log(this.usuarios.length)
  },
  error=>{
      console.log(JSON.stringify(error));
  }); 
    }

    i:number;
    

    ngOnInit(): void {
     
      this.ObtenerUsuarios();
    
    }
    
    habilitar(id){

      Swal.fire({
    title: 'Esta seguro?',
    text: "El usuario aparecera ahora como habilitado",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Si, habilitar!'
    }).then((result) => {
    if (result.value) {
      Swal.fire(
    
        'habilitado!',
        'El usuario ha sido habilitado.',
        'success'
       
      )
        
         this.refrescar(id);
    }
    })
    
    
    }
    
    refrescar(id){
          console.log(id);
          this.servi.Habilitar(id);
          this.ObtenerUsuarios();
          this.ngOnInit();
    
    
    }

}
