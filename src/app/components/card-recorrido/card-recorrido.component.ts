import { Component, OnInit, Input, ViewChild, AfterViewInit, Output, EventEmitter } from '@angular/core';
import { Recorrido } from 'src/app/interfaces/recorrido.interface';
import * as Mapboxgl from 'mapbox-gl';
import { environment } from '../../../environments/environment';
import { GeometryService } from '../../services/geometry.service';
import { PuntoInteres } from '../../interfaces/punto-interes.interface';
import Swal from 'sweetalert2';
import { RecorridosService } from '../../services/recorridos.service';

@Component({
  selector: 'app-card-recorrido',
  templateUrl: './card-recorrido.component.html',
  styleUrls: ['./card-recorrido.component.css']
})
export class CardRecorridoComponent implements OnInit, AfterViewInit {

  @ViewChild('mapa', { static: false }) mapa: any;
  mapbox: Mapboxgl.Map;
  @Input() recorrido: Recorrido;
  @Output() eliminado = new EventEmitter<number>();

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
    private geometryService: GeometryService,
    private recorridosService: RecorridosService
  ) { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    Mapboxgl.accessToken = environment.mapboxToken;
    this.mapbox = new Mapboxgl.Map({
      container: this.mapa.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-74.3451602, 4.8154681],
      zoom: 14.5
    });

    this.mapbox.on('load', () => {
      this.mapbox.addSource('line', {
        type: 'geojson',
        data: this.geojson
      });
      // add the line
      this.mapbox.addLayer({
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
      this.cargarRuta();
      this.cargarPtsControl();
      this.cargarPtsInteres();
    });

    // controls del mapa
    this.mapbox.addControl(new Mapboxgl.NavigationControl());
    this.mapbox.addControl(new Mapboxgl.FullscreenControl());
  }

  cargarRuta() {
    const coordinates = this.geometryService.getCoordinates(this.recorrido.RutaText);
    this.geojson.features[0].geometry.coordinates = coordinates;
    this.mapbox.getSource('line').setData(this.geojson);
  }

  cargarPtsControl() {
    const ptsControl = JSON.parse(this.recorrido.PuntosControl);
    // console.log(ptsControl);
    ptsControl.forEach(x => {
      const popup = new Mapboxgl.Popup({offset: 25}).setText(x.nombre);
      new Mapboxgl.Marker({ color: '#d33' })
                  .setPopup(popup)
                  .setLngLat([x.longitud, x.latitud])
                  .addTo(this.mapbox);
    });
  }

  cargarPtsInteres() {
    const ptsInteres = JSON.parse(this.recorrido.PuntosInteres);
    // console.log(ptsInteres);
    ptsInteres.forEach((x: PuntoInteres) => {
      const popup = new Mapboxgl.Popup({offset: 25}).setText(x.Descripcion);
      new Mapboxgl.Marker()
                  .setPopup(popup)
                  .setLngLat([x.Longitud, x.Latitud])
                  .addTo(this.mapbox);
    });
  }

  eliminar() {
    Swal.fire({
      title: '¿Estás seguro?',
      text: 'No serás capaz de revertir los cambios',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar',
      cancelButtonText: 'Cancelar'
    }).then(async (result) => {
      if (result.value) {
        const deleted = await this.recorridosService.eliminarRecorrido(this.recorrido.Id);
        if (deleted) {
          Swal.fire(
            'Eliminado!',
            'success'
          );
          this.eliminado.emit(this.recorrido.Id);
        }
      }
    });
  }

}
