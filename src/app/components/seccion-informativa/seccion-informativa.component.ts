import { Component, OnInit , ComponentFactoryResolver} from '@angular/core';
import { ServicioInfoService } from './servicio-info.service';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule , FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ImagesService } from 'src/app/services/images.service';
import {Noticia} from 'src/app/interfaces/noticia.interface'

@Component({
  selector: 'app-seccion-informativa',
  templateUrl: './seccion-informativa.component.html',
  styleUrls: ['./seccion-informativa.component.css']
})
export class SeccionInformativaComponent implements OnInit {

  descripcion: any;
  reseniaHistorica: any;
  horario: any;
  Noticias:any;
  rutaImagen:string="http://piedrasdeltunjo.tk/images/getImage?tipo=noticias&nombre=";
  fechatemp:any;
  i:number=0;
  imagenes:any;
  constructor(
    private infoService: ServicioInfoService , private imagesService: ImagesService
  ) {}

ObtenerUltimasNoticias(){

  this.infoService.getNoticias().subscribe(resultado =>{
    // console.log("este es el resultado")
    // console.log(resultado)
    this.Noticias=resultado;
  //  console.log(this.Noticias)
    for(this.i=0;this.i<this.Noticias.length;this.i++){
       this.fechatemp=this.Noticias[this.i].fechaPublicacion;
       var splitted = this.fechatemp.split("T", 2); 
        this.fechatemp=splitted[0];
   
        this.Noticias[this.i].fechaPublicacion=this.fechatemp;
  
    }
 },
 error=>{
console.log(JSON.stringify(error));

 }); 
}
  
  ngOnInit() {
    this.infoService.getInformacion()
                    .subscribe((res: any[]) => {
                      this.descripcion = res.find(x => x.id === 2);
                      this.reseniaHistorica = res.find(x => x.id === 4);
                      this.horario = res.find(x => x.id === 7);
                   });

 
   this.ObtenerUltimasNoticias();
 
  }
}
