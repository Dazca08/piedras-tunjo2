import { Component, OnInit , ComponentFactoryResolver} from '@angular/core';
import { ServicioInfoService } from './servicio-info.service';
import { CommonModule } from '@angular/common';

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
  noticia1:any;
  noticia2:any;
  noticia3:any;
  rutaImagen:string="http://piedrasdeltunjo.tk/images/getImage?tipo=noticias&nombre=";
  fechatemp:any;
  i:number=0;
  imagenes:any;
  constructor(
    private infoService: ServicioInfoService
  ) {}

ObtenerUltimasNoticias(){

  this.infoService.getNoticias().subscribe(resultado =>{
    console.log("este es el resultado")
    console.log(resultado)
 this.Noticias=resultado;

 //console.log("es undefinida")
 //this.Noticias="";
 //console.log(this.Noticias.length)

 console.log(this.Noticias)
  for(this.i=0;this.i<this.Noticias.length;this.i++){
     this.fechatemp=this.Noticias[this.i].fechaPublicacion;
  
     var splitted = this.fechatemp.split("T", 2); 
 
    // console.log(splitted)
      this.fechatemp=splitted[0];
 
      this.Noticias[this.i].fechaPublicacion=this.fechatemp;
      this.imagenes=this.Noticias[this.i].imagenesUrl.split("@")
     console.log(this.imagenes)

   }
//  console.log(this.Noticias)
//    console.log("Informacion ya tiene resultado");
    this.noticia1=this.Noticias[0];
    //this.noticia2=this.Noticias[1];
   //this.noticia3=this.Noticias[2];
     console.log(this.noticia1);
    // console.log(this.noticia2);
    // console.log(this.noticia3);
 
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
