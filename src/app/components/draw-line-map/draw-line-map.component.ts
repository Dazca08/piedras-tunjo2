import { Component, OnInit, AfterViewInit, Output, EventEmitter } from '@angular/core';
import * as Mapboxgl from 'mapbox-gl';
import { environment } from '../../../environments/environment';
import { PuntosInteresService } from '../../services/puntos-interes.service';
import { PuntoInteres } from '../../interfaces/punto-interes.interface';

@Component({
  selector: 'app-draw-line-map',
  templateUrl: './draw-line-map.component.html',
  styleUrls: ['./draw-line-map.component.css']
})
export class DrawLineMapComponent implements OnInit, AfterViewInit {

  @Output() changeRuta = new EventEmitter<number[][]>();
  @Output() changeIds = new EventEmitter<number[]>();
  mapa: Mapboxgl.Map;
  puntosInteres: PuntoInteres[] = [];
  idsPuntosInt: number[] = []; // id´s de los puntos de interes seleccionados
  isPuntoInteres = false;

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
            // [-74.34334997749423, 4.819062041614913],
          ]
        }
      }
    ]
  };

  constructor(
    private puntosIntService: PuntosInteresService
  ) { }

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

      this.loadPuntosInteres();

      this.mapa.addSource('line', {
        type: 'geojson',
        data: this.geojson
      });
      // add the line
      this.mapa.addLayer({
        id: 'line-animation',
        type: 'line',
        source: 'line',
        layout: {
          'line-cap': 'round',
          'line-join': 'round'
        },
        paint: {
          'line-color': '#ed6498',
          'line-width': 5,
          'line-opacity': 0.8
        }
      });
    });

    this.mapa.on('click', (e: any) => {
      if (!this.isPuntoInteres) {
        const { lng, lat } = e.lngLat;
        this.agregarCoordenada(lng, lat);
      } else {
        this.isPuntoInteres = false;
      }
    });
  }

  async loadPuntosInteres() {
    this.puntosInteres = await this.puntosIntService.getPuntosInteres();
    this.puntosInteres.forEach(punto => {
      const popup = new Mapboxgl.Popup({ offset: 25 }).setText(punto.Descripcion);
      const marker = new Mapboxgl.Marker()
                                  .setPopup(popup)
                                  .setLngLat([punto.Longitud, punto.Latitud])
                                  .addTo(this.mapa);

      marker._element.addEventListener('click', () => {
        this.agregarCoordenada(punto.Longitud, punto.Latitud);
        this.isPuntoInteres = true;
      });
    });
  }

  agregarCoordenada(lng: number, lat: number) {
    this.geojson.features[0].geometry.coordinates.push([Number(lng), Number(lat)]);
    this.mapa.getSource('line').setData(this.geojson);
    this.buscarIdsPuntosInteres();
  }

  limpiar() {
    this.geojson.features[0].geometry.coordinates = [];
    this.idsPuntosInt = [];
    this.mapa.getSource('line').setData(this.geojson);
    this.emits();
  }

  deshacer() {
    this.geojson.features[0].geometry.coordinates.pop();
    this.mapa.getSource('line').setData(this.geojson);
    this.buscarIdsPuntosInteres();
  }

  buscarIdsPuntosInteres() {
    this.idsPuntosInt = [];
    this.coordenadas.forEach(coordenada => {
      const [lng, lat] = coordenada;
      const puntoInt = this.puntosInteres.find(x => Number(x.Longitud) === lng && Number(x.Latitud) === lat);
      if (puntoInt) {
        const exists = this.idsPuntosInt.find(z => z === puntoInt.Id);
        if (!exists) {
          this.idsPuntosInt.push(puntoInt.Id);
        }
      }
    });
    this.emits();
  }

  get coordenadas() {
    return this.geojson.features[0].geometry.coordinates;
  }

  emits() {
    this.changeRuta.emit(this.geojson.features[0].geometry.coordinates);
    this.changeIds.emit(this.idsPuntosInt);
  }

}
