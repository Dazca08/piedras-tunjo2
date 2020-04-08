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
  noticias: Noticias[];  
  noti: Noticias ={
      
    id:"",
    titulo: "",
    fecha_publicacion: "",
    imagenesUrl:"",     
    descripcion:""
  }

  ObtenerNoticias(){          
    this.Servicio_NoticiasService.Obtener().subscribe(resultado =>{
    this.noticias=resultado;        
    console.log("Informacion ya tiene resultado");
    console.log(this.noticias.length)
  },
    error=>{ console.log(JSON.stringify(error));
  });       
  }
  
  i:number;
  ngOnInit(): void {
    this.ObtenerNoticias();
  }

  

}
