import { Component, OnInit, Input, ViewChild, AfterViewInit } from '@angular/core';
import { Recorrido } from 'src/app/interfaces/recorrido.interface';
import * as Mapboxgl from 'mapbox-gl';
import { environment } from '../../../environments/environment';
import { RecorridosService } from '../../services/recorridos.service';
import { GeometryService } from '../../services/geometry.service';

@Component({
  selector: 'app-card-recorrido',
  templateUrl: './card-recorrido.component.html',
  styleUrls: ['./card-recorrido.component.css']
})
export class CardRecorridoComponent implements OnInit, AfterViewInit {

  @ViewChild('mapa', { static: false }) mapa: any;
  mapbox: Mapboxgl.Map;
  @Input() recorrido: Recorrido;

  geojson = {
    type: 'FeatureCollection',
    features: [
      {
        type: 'Feature',
        geometry: {
          type: 'LineString',
          coordinates: [
            // [-74.34453014946088, 4.814101441626363],
            // [-74.34201960182293, 4.817950186143946],
          ]
        }
      }
    ]
  };

  constructor(
    private geometryService: GeometryService
  ) { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    Mapboxgl.accessToken = environment.mapboxToken;
    this.mapbox = new Mapboxgl.Map({
      container: this.mapa.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-74.3451602, 4.8154681],
      zoom: 15
    });

    this.mapbox.on('load', () => {
      this.cargarRuta();
    });

    // controls del mapa
    this.mapa.addControl(new Mapboxgl.NavigationControl());
    this.mapa.addControl(new Mapboxgl.FullscreenControl());
  }

  async cargarRuta() {
    const coordinates = this.geometryService.getCoordinates(this.recorrido.RutaText);
    console.log(coordinates);
  }

  async eliminar(id: number) {
    console.log(id);
  }

}
