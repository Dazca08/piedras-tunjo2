import { Component, OnInit, Input, Output, EventEmitter, AfterViewInit } from '@angular/core';
import { Coordenada } from '../../interfaces/coordenada.interface';
import * as Mapboxgl from 'mapbox-gl';
import { environment } from 'src/environments/environment';
import { Pictograma } from '../../interfaces/pictograma.interface';

@Component({
  selector: 'app-select-coordinates',
  templateUrl: './select-coordinates.component.html',
  styleUrls: ['./select-coordinates.component.css']
})
export class SelectCoordinatesComponent implements OnInit, AfterViewInit {

  mapa: Mapboxgl.Map;
  markers = [];
  @Input() pictograma: Pictograma = undefined;
  @Input() height = '300px';
  @Input() width = '100%';
  @Output() selectCoordinate = new EventEmitter<Coordenada>();

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    Mapboxgl.accessToken = environment.mapboxToken;
    this.mapa = new Mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-74.3451602, 4.8154681],
      zoom: 15
    });

    this.mapa.on('load', () => {
      if (this.pictograma) {
        // const popup = new Mapboxgl.Popup({ offset: 25 }).setText(this.pictograma.Nombre);
        const marker = new Mapboxgl.Marker({ draggable: true })
                                  .setLngLat([this.pictograma.Longitud, this.pictograma.Latitud])
                                  .addTo(this.mapa);
        this.markers.push(marker);
      }
    });

    this.mapa.on('click', async (e: any) => {
      if (this.markers[0]) {
        this.markers[0].remove();
        this.markers = [];
      }
      const { lng, lat } = e.lngLat;
      const marker = new Mapboxgl.Marker({ draggable: true })
                                .setLngLat([lng, lat])
                                .addTo(this.mapa);
      this.markers.push(marker);
      this.selectCoordinate.emit({
        Latitud: lat,
        Longitud: lng
      });
    });
  }

}
