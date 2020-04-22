import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { RecorridosService } from '../../../services/recorridos.service';
import { Recorrido } from 'src/app/interfaces/recorrido.interface';
import { GeometryService } from '../../../services/geometry.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  recorridos: Recorrido[] = [];

  constructor(
    private recorridosService: RecorridosService,
    private geometryService: GeometryService
  ) { }

  ngOnInit(): void {
    this.cargarRecorridos();
  }

  async cargarRecorridos() {
    this.recorridos = await this.recorridosService.getRecorridos();
  }

}
