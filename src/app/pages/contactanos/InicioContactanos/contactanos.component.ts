import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicioLService } from 'src/app/pages/preguntas-frecuentes/servicio-l.service';
@Component({
  selector: 'app-contactanos',
  templateUrl: './contactanos.component.html',
  styleUrls: ['./contactanos.component.css']
})
export class ContactanosComponent implements OnInit {
preguntas:any;
  constructor(private service: ServicioLService) { }
  ObtenerPreguntas(){
  this.service.ObtenerJson().subscribe(resultado =>{
        this.preguntas=resultado; 
        console.log(this.preguntas)
  	})
  }
  ngOnInit(): void {
    this.ObtenerPreguntas();
  }

}
