import { Component, OnInit } from '@angular/core';
import { Router,} from '@angular/router';
import { ServiciopromService } from 'src/app/services/servicioprom.service';
import { prom } from 'src/app/pages/promociones/promocion.model';
import Swal from 'sweetalert2';
declare var $: any;
@Component({
  selector: 'app-inicioprom',
  templateUrl: './inicioprom.component.html',
  styleUrls: ['./inicioprom.component.css']
})
export class IniciopromComponent implements OnInit {

  constructor(private ServiciopromService:ServiciopromService,private router: Router) {  this.ObtenerPromocion}
  filtropromPost ='';
  fechatemp:string='';
 fechartemp:string='';
  PageActual:number=1;
  indicador:boolean=true;
  indicadorBoton:string="Ver calendario de promociones"
  i:number;
  icono:string="calendar"
   resultadoComparacion:any;
  promo: prom[]; 
  promotemp:prom[];
  fechatempi1:string="";
  fechatempF1:string="";
  fechatempi2:string="";
  fechatempF2:string="";
  nombretemp:string="";
  contador:number=0;
  contador2:number=0
arraiy =[
    {
   title:'',
    start:'',
    end:'',
    color:''
  }
  ];
 arraitemp=[
{
    title:'',
    start:'',
    end:'',
    color:''

}
 ]
 array =
    {
   title:'',
    start:'',
    end:'',
    color:''
  }
  ;
   ObtenerPromocion(){
     if(this.indicador==true){
        this.ServiciopromService.Obtenerpromocion().subscribe(resultado =>{
      this.promo=resultado;
      //this.promo=this.promo.filter(x=>x.Nombre=="");
       for(this.i=0;this.i<this.promo.length;this.i++){
           this.fechatemp=this.promo[this.i].FechaInicio;
           this.fechartemp=this.promo[this.i].FechaFin;
           var splitted = this.fechatemp.split("T", 2);
           var splitted2=this.fechartemp.split("T",2);
   
           this.fechatemp=splitted[0];
           this.fechartemp=splitted2[0];
           this.promo[this.i].FechaInicio=this.fechatemp;
           this.promo[this.i].FechaFin=this.fechartemp;

           }
      console.log(this.promo)
     
      },
      error=>{
       console.log(JSON.stringify(error));
     
      }); 
     }
     else if(this.indicador==false){
       this.contador++
          console.log(this.contador)
        this.ServiciopromService.Obtenerpromocion().subscribe(resultado =>{
      this.promo=resultado;
      this.promo=this.promo.filter(x=>x.Estado=="1");
       for(this.i=0;this.i<this.promo.length;this.i++){
           this.fechatemp=this.promo[this.i].FechaInicio;
           this.fechartemp=this.promo[this.i].FechaFin;
           var splitted = this.fechatemp.split("T", 2);
           var splitted2=this.fechartemp.split("T",2);
   
           this.fechatemp=splitted[0];
           this.fechartemp=splitted2[0];
           this.promo[this.i].FechaInicio=this.fechatemp;
           this.promo[this.i].FechaFin=this.fechartemp;
           this.nombretemp=this.promo[this.i].Nombre;
           
             this.arraiy.push({title:this.nombretemp,start:this.fechatemp,end:this.fechartemp,color:this.coloresAleatorios()});
           
          

           }
      console.log(this.promo)
       this.funcion( this.arraiy , this.promo);
      },
      error=>{
       console.log(JSON.stringify(error));
     
      });
     }
     
    }
        
  eliminar(id){
       Swal.fire({
            title: 'Estas seguro?',
            text: " No se podra recuperar la informacion!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, Borrar!'

                }).then((result) => {
                if (result.value) {
                  Swal.fire(
                   'Borrado!',
                   ' la informacion ha sido eliminada',
                   'success'
                           )
                this.ServiciopromService.Eliminar(id);
                this.refrescar();

                 }
                   })



   }


 listarContestados(){

   if(this.indicador==true){
       this.ngOnInit();
     this.indicador=false;
     this.indicadorBoton="Inicio"
     this.icono="home"
   }
   else if(this.indicador==false){
     this.ngOnInit();
    this.indicador=true;
    this.indicadorBoton="Ver calendario de promociones"
      this.icono="calendar"
   }
   //this.coloresAleatorios();
   //console.log(this.coloresAleatorios())
    this.ngOnInit();
  }
coloresAleatorios(){
var myArray = ["#000099",
 "#00FFCC", 
 "#6699CC",
  "#CC6600",
   "#33CC00",
    "#66CC99",
  "#990099",
  "#99FF00"
];
var cuatroRandom = "";
var posicionesElegibles = [];
var i, r;
for (i = 0; i < myArray.length; i++) posicionesElegibles[i] = i;
for (i = 0; i < 4; i++) {
  r = Math.floor(Math.random() * posicionesElegibles.length);
  cuatroRandom=myArray[posicionesElegibles[r]];
  posicionesElegibles.splice(r, 1);
}
console.log(cuatroRandom);
return cuatroRandom;
}
refrescar(){
 this.ObtenerPromocion();
 this.ObtenerPromocion();
 this.ngOnInit();
}
 guardar({value}: {value:prom}){
   console.log (value)
   if(value.Nombre=="" || value.Descripcion==""){
           Swal.fire(
            'Por favor llene todos los campos!',
            'pregunta no editada!',
            'error'
                     )
   }
   else if(value.Nombre.length<5 || value.Descripcion.length<10){
           Swal.fire(
            'el nombre de la promocion debe tener al menos 5 caracteres y la descripcion al menos 10!',
            'pregunta no editada!',
            'error'
                     )
   }


   else{
         Swal.fire({
          title: 'Esta seguro?',
          text: "Desea editar esta promocion?",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Si, guardar!'
                 }).then((result) => {
                      if (result.value) {
                       /*Swal.fire(
                       'Guardado!',
                       'La promocion ha sido editada ',
                          'success'
                              )*/

                  console.log(value)
                  this.comparacion(value);
               //this.ServiciopromService.update(value);
                                         }
                   })
   }
 

  }


 funcion(eventoos , event ){
  console.log(eventoos)
  //eventoos=eventoos.filter(x=>x.title=="") 
console.log("Con repetidos es:", eventoos);
let sinRepetidos = eventoos.filter((valorActual, indiceActual, arreglo) => {
    //Podríamos omitir el return y hacerlo en una línea, pero se vería menos legible
    return arreglo.findIndex(valorDelArreglo => JSON.stringify(valorDelArreglo.start) === JSON.stringify(valorActual.start)) === indiceActual
});
console.log("Sin repetidos es:", sinRepetidos);
console.log(sinRepetidos.length);

        
        $("#calendar").fullCalendar({  

                        header: {
                            left   : 'prev,next today',
                            center : 'title',
                            right  : 'month,agendaWeek,agendaDay'
                        },
                       locale: 'es',
         monthNames: ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'],
        monthNamesShort: ['Ene','Feb','Mar','Abr','May','Jun','Jul','Ago','Sep','Oct','Nov','Dic'],
        dayNames: ['Domingo','Lunes','Martes','Miércoles','Jueves','Viernes','Sábado'],
        dayNamesShort: ['Dom','Lun','Mar','Mié','Jue','Vie','Sáb'],         
                                
    

                        navLinks   : true,
                        editable   : true,
                        eventLimit : true,
                        events:sinRepetidos,
                         eventClick: function(info) {
              
   Swal.fire({
      title: 'Espere por favor',
      text: 'Cargando información',
      icon: 'info',
      allowOutsideClick: false
    });
    Swal.showLoading();
this.nombretemmp=info.title;

   this.filtronombre=eventoos.filter(x=>x.title==this.nombretemmp);

if(this.filtronombre.length==0){

                      Swal.fire(
  'No existen eventos en este dia !',
  'consulte los dias marcados con un evento para mas informacion',
  'info'
)
}
else{
  
     this.filtronombre=eventoos.filter(x=>x.title==this.nombretemmp);

      this.array=this.filtronombre[0];

       

        if(this.array.title==this.nombretemmp){
                       Swal.fire({

  title: this.array.title,
  text: "esta promocion va desde: "+this.array.start+", hasta : "+this.array.end,
  icon:"info"
}) 
       
        }
        else{
             Swal.fire({

  title: "lo sentimos ",
  text: "no hay eventos",
  imageUrl: 'http://piedrasdeltunjo.tk/images/getImage?tipo=evento&nombre='+this.evento.ImagenesUrl,
  imageWidth: 400,
  imageHeight: 200,
  imageAlt: 'Custom image',
})
        }
}


},
 
                    });
     
    
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
     this.ServiciopromService.Obtenerpromocion().subscribe(resultado =>{
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
           'Promocion no actualizada',
           'error'
            
             )
      this.refrescar();
                        }
   else{
    this.ServiciopromService.update(value);
    
   }
 })
  
  } 

          
     
    
    
  ngOnInit(): void {
   this.ObtenerPromocion();


   
  }

}
