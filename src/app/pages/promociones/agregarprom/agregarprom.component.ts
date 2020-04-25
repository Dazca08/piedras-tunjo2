import { Component, OnInit } from '@angular/core';
import { Router,} from '@angular/router';
import { ServiciopromService } from 'src/app/services/servicioprom.service';
import { prom } from 'src/app/pages/promociones/promocion.model';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-agregarprom',
  templateUrl: './agregarprom.component.html',
  styleUrls: ['./agregarprom.component.css']
})
export class AgregarpromComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,
    private servi: ServiciopromService,
    Router: Router,
    private router: Router) { }
    promo: prom[];  
        
    insertarprom: prom ={
    Nombre:"",
    Descripcion:"",
    LastModification:"",
    Precio:"",
    Estado:"",
    FechaFin:"",
    FechaInicio:"",
    PorcentajeDescuento:"",
    TicketId:"",
    Token:"",   
    }
  promotemp:prom[];
  fechatempi1:string="";
   fechatempF1:string="";
    fechatempi2:string="";
     fechatempF2:string="";
     resultadoComparacion:any;
 i:number;
    agregar({value}: {value: prom}){
     console.log(value);
   if(value.Nombre=="" || value.Descripcion=="" || value.Precio=="" || value.PorcentajeDescuento==""|| value.FechaInicio==""|| value.FechaFin=="" ){
          Swal.fire(
         'Lllene todos los campos por favor!',
           'Promocion no agregada!',
          'error'
                  )

   }
   else if(value.Nombre.length<5 || value.Descripcion.length<10 ){
           Swal.fire(
         'El nombre debe tener al menos 5 caracteres , y la descripcion al menos 10!',
           'Promocion no agregada!',
          'error'
                  )
   }
   else{
      console.log(value)
       this.comparacion(value);
   }
 

    }
    refrescar(){
     

      this.insertarprom.Nombre="";
      this.insertarprom.Descripcion="";
      this.insertarprom.Precio="";
       this.insertarprom.FechaFin="";
       this.insertarprom.FechaInicio="";
       this.insertarprom.PorcentajeDescuento="";
    }

splitfecha(fecha){
var split=fecha.split('-');
return split
}
splitfechaT(fecha){

  var split=fecha.toString();
  var split2=split.split('T');
return split2[0]
}

parseo(fecha){

var añor=parseInt(fecha[0],10);

var mesr=parseInt(fecha[1],10);

var diar=parseInt(fecha[2],10);

var array =
    {
   año:añor,
    mes:mesr,
    dia:diar,
    
  }
  

return array;

}






 Comparacionfecha(fechainicio1 , fechafin1 , fechainicio2 , fechafin2){


var inicio1=this.parseo(fechainicio1);
console.log(inicio1);
var fin1=this.parseo(fechafin1);
console.log(fin1);
var inicio2=this.parseo(fechainicio2);
console.log(inicio2);
var fin2=this.parseo(fechafin2);
console.log(fin2);
var resultado="valida";

if( inicio1.mes==inicio2.mes && inicio1.mes==fin2.mes && inicio1.dia>=inicio2.dia && inicio1.dia<=fin2.dia){

   resultado="invalida";

}

else if( fin1.mes==inicio2.mes && fin1.mes==fin2.mes && fin1.dia>=inicio2.dia && fin1.dia<=fin2.dia){
   resultado="invalida"
}
else if( fin1.mes>=fin2.mes && inicio1.mes<fin2.mes  && fin1.dia>fin2.dia ){
    resultado="invalida"
}
else if( fin1.mes>=fin2.mes && inicio1.mes==fin2.mes && inicio1.dia<fin2.dia  && fin1.dia>fin2.dia ){
    resultado="invalida"
}
else{
  resultado="valida"
}

console.log(resultado)
 return resultado;
}
   comparacion(value){
     var bandera="no existe"
     this.servi.Obtenerpromocion().subscribe(resultado =>{
        this.promotemp=resultado;
     var splitinicial="";
     var splitfinal="";
   for(this.i=0;this.i<this.promotemp.length;this.i++){
     if(value.Id != this.promotemp[this.i].Id){
       splitinicial=this.splitfechaT(this.promotemp[this.i].FechaInicio)
       splitfinal=this.splitfechaT(this.promotemp[this.i].FechaFin)
           this.fechatempi1=this.splitfecha(value.FechaInicio);
     this.fechatempF1=this.splitfecha(value.FechaFin);
     this.fechatempi2=this.splitfecha(splitinicial);
     this.fechatempF2=this.splitfecha(splitfinal);
      this.resultadoComparacion=this.Comparacionfecha(this.fechatempi1,this.fechatempF1,this.fechatempi2,this.fechatempF2);
        console.log(this.resultadoComparacion);
        if(this.resultadoComparacion=="invalida"){
           bandera="existe"
        }

     }
   }

   if(bandera=="existe"){
        Swal.fire(
           'La nueva fecha es incorrecta ya que en ese rango exite una promocion',
           'Promocion no Creada',
           'error'
            
             )
      
                        }
   else{
    this.servi.insertar(value);
    this.refrescar();
   }
 })
  
  } 

  ngOnInit(): void {
  }

}
