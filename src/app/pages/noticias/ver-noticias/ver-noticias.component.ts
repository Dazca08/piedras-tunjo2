import { ServicioNoticiasService } from '../servicio-noticias.service';
import { Component, OnInit } from '@angular/core';
import { Noticias } from '../noticias.model';
import { Router,ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-ver-noticias',
  templateUrl: './ver-noticias.component.html',
  styleUrls: ['./ver-noticias.component.css']
})
export class VerNoticiasComponent implements OnInit {

  constructor( private router: Router, private Servicio_NoticiasService:ServicioNoticiasService) { this.ObtenerNoticias}
  filtroNoticiasPost ='';
  PageActual:number=1;
  fechaPtemp:string="";
  noticias: Noticias[];
  noti: Noticias ={
    id:"",
    titulo:"",
    fechaPublicacion:"",
    imagenesUrl:"",
    descripcion:""
  }

  ObtenerNoticias(){
    this.Servicio_NoticiasService.Obtener().subscribe(resultado =>{
    this.noticias=resultado;
    for(this.i=0;this.i<this.noticias.length;this.i++){
      this.fechaPtemp=this.noticias[this.i].fechaPublicacion;
      var splittedd=this.fechaPtemp.split("T", 2);
     // console.log(splitted)
       this.fechaPtemp=splittedd[0];
       this.noticias[this.i].fechaPublicacion=this.fechaPtemp;
    }
    console.log("Informacion ya tiene resultado");
    console.log(this.noticias.length)
  },
    error=>{ console.log(JSON.stringify(error));
  });
  }


eliminar(id){

  Swal.fire({
  title: 'Esta seguro?',
  text: "¿Realmente quiere eliminar la noticia?",
  icon: 'warning',
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'Eliminar!'
}).then((result) => {
    if (result.value) {
      Swal.fire(

        'Eliminado!',
        'La noticia ha sido eliminada....',
        'success'

      )
      this.refrescar(id);
    }
  })
  this.router.navigateByUrl("/admin/ver_noticias");

}

refrescar(id){
  console.log(id);
  this.Servicio_NoticiasService.Eliminar(id);
  this.ngOnInit();


}


  i:number;
  ngOnInit(): void {
    this.ObtenerNoticias();
  }



}
