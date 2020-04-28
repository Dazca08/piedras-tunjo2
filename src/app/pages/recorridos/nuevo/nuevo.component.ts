import { Component, OnInit, AfterViewInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import * as Mapboxgl from 'mapbox-gl';
import { PuntosInteresService } from '../../../services/puntos-interes.service';
import { environment } from '../../../../environments/environment';
import { PuntoInteres } from '../../../interfaces/punto-interes.interface';
import Swal from 'sweetalert2';
import { PuntoMap } from '../../../interfaces/punto-control.interface';
import { Recorrido } from '../../../interfaces/recorrido.interface';
import { GeometryService } from '../../../services/geometry.service';
import { RecorridosService } from '../../../services/recorridos.service';
import { Router } from '@angular/router';

declare var $: any;
const LONGITUD = -74.3451602;
const LATITUD = 4.8154681;

@Component({
  selector: 'app-nuevo',
  templateUrl: './nuevo.component.html',
  styleUrls: ['./nuevo.component.css']
})
export class NuevoComponent implements OnInit, AfterViewInit {

  nombre = '';
  tiempoEstimado = 10;

  defineRuta = true;
  verPtsInteres = false;
  isPuntoInteres = false;
  isPuntoControl = false;
  puntosControl: PuntoMap[] = [];
  existsPuntoCtrl = false;
  mapa: Mapboxgl.Map;
  markersPtsInteres = [];
  markersPtsControl = [];
  puntosInteres: PuntoInteres[] = [];
  ptsInteresRuta: PuntoInteres[] = []; // id´s de los puntos de interes seleccionados

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
    private puntosIntService: PuntosInteresService,
    private geometryService: GeometryService,
    private recorridosService: RecorridosService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    Mapboxgl.accessToken = environment.mapboxToken;
    this.mapa = new Mapboxgl.Map({
      container: 'map-recorrido',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [LONGITUD, LATITUD],
      zoom: 15
    });
    // cargar el mapa
    this.mapa.on('load', () => {
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
    // event click
    this.mapa.on('click', (e: any) => {
      const { lng, lat } = e.lngLat;
      if (this.defineRuta) {
        // Nuevo trazo de ruta
        if (!this.isPuntoInteres && !this.isPuntoControl) {
          // NO es un punto de interés ni tampoco un punto de control
          this.agregarCoordenada(lng, lat);
        } else {
          // Es un punto de interés o un punto de control
          this.isPuntoInteres = this.isPuntoControl = false;
        }
      } else {
        // nuevo punto de control
        if (!this.existsPuntoCtrl && !this.isPuntoInteres) {
          // el punto de NO existe y mo es un punto de interés
          this.nuevoPuntoControl(lng, lat);
        } else {
          // el punto de control existe
          // alert('El punto de control ya existe');
          this.existsPuntoCtrl = this.isPuntoInteres = false;
        }
      }
    });
    // controls del mapa
    this.mapa.addControl(new Mapboxgl.NavigationControl());
    this.mapa.addControl(new Mapboxgl.FullscreenControl());
  }

  // CREAR NUEVO MARKER DE PUNTO DE CONTROL
  nuevoPuntoControl(lng: number, lat: number) {
    Swal.fire({
      title: 'Nuevo punto de control',
      text: 'Ingresa el nombre del punto',
      input: 'text',
      showCancelButton: true,
      confirmButtonText: 'Agregar',
      cancelButtonText: 'Cancelar',
      cancelButtonColor: '#d33',
      inputValidator: (value) => {
        if (!value) {
          return 'Necesitas escribir un nombre!';
        }
      }
    }).then(res => {
      if (res.value) {
        const punto: PuntoMap = {
          longitud: lng,
          latitud: lat,
          nombre: res.value
        };
        this.puntosControl.push(punto);
        const popup = new Mapboxgl.Popup({ offset: 25 }).setText(res.value);
        const marker = new Mapboxgl.Marker({ color: '#d33' })
                                  .setPopup(popup)
                                  .setLngLat([lng, lat])
                                  .addTo(this.mapa);
        this.markersPtsControl.push(marker);
        marker._element.addEventListener('click', () => {
          if (!this.defineRuta) {
            // cuando estamos creando puntos de control
            this.existsPuntoCtrl = true;
          } else {
            // cuando estamos trazando la ruta
            this.isPuntoControl = true;
            this.agregarCoordenada(lng, lat);
          }
        });
      }
    });
  }

  async loadPuntosInteres() {
    if (this.verPtsInteres) {
      this.puntosInteres = await this.puntosIntService.getPuntosInteres();
    } else {
      this.eliminarMarkers();
      this.puntosInteres = [];
    }
    this.mostrarPuntosInteres();
  }

  // CREAR MARKERS DE PUNTOS DE INTERÉS
  mostrarPuntosInteres() {
    this.puntosInteres.forEach(punto => {
      const popup = new Mapboxgl.Popup({ offset: 25 }).setText(punto.Descripcion);
      const marker = new Mapboxgl.Marker()
                                  .setPopup(popup)
                                  .setLngLat([punto.Longitud, punto.Latitud])
                                  .addTo(this.mapa);
      this.markersPtsInteres.push(marker);
      marker._element.addEventListener('click', () => {
        if (this.defineRuta) {
          this.agregarCoordenada(punto.Longitud, punto.Latitud);
        }
        this.isPuntoInteres = true;
      });
    });
  }

  eliminarMarkers() {
    this.markersPtsInteres.forEach((x, index) => {
      this.markersPtsInteres[index].remove();
    });
  }

  agregarCoordenada(lng: number, lat: number) {
    this.geojson.features[0].geometry.coordinates.push([Number(lng), Number(lat)]);
    this.mapa.getSource('line').setData(this.geojson);
    this.buscarIdsPuntosInteres();
  }

  limpiar() {
    if (this.defineRuta) {
      // eliminar todo el trazo
      this.geojson.features[0].geometry.coordinates = [];
      this.ptsInteresRuta = [];
      this.mapa.getSource('line').setData(this.geojson);
    } else {
      // eliminar todos los puntos de control puestos
      this.puntosControl = [];
      this.markersPtsControl.forEach((x, index) => {
        this.markersPtsControl[index].remove();
      });
      this.markersPtsControl = [];
    }
  }

  deshacer() {
    if (this.defineRuta) {
      // deshacer el último trazo puesto
      this.geojson.features[0].geometry.coordinates.pop();
      this.mapa.getSource('line').setData(this.geojson);
      this.buscarIdsPuntosInteres();
    } else {
      // deshacer el último punto de control puesto
      this.puntosControl.pop();
      if (this.markersPtsControl.length > 0) {
        this.markersPtsControl[this.markersPtsControl.length - 1].remove();
      }
      this.markersPtsControl.pop();
    }
  }

  buscarIdsPuntosInteres() {
    this.ptsInteresRuta = [];
    this.coordenadas.forEach(coordenada => {
      const [lng, lat] = coordenada;
      const puntoInt = this.puntosInteres.find(x => Number(x.Longitud) === lng && Number(x.Latitud) === lat);
      if (puntoInt) {
        const exists = this.ptsInteresRuta.find(z => z.Id === puntoInt.Id);
        if (!exists) {
          this.ptsInteresRuta.push(puntoInt);
        }
      }
    });
  }

  // las coordenadas de la ruta trazada
  get coordenadas() {
    return this.geojson.features[0].geometry.coordinates;
  }

  async onSubmit(form: NgForm) {
    if (form.valid) {
      const { nombre, tiempoEst } = form.value;
      if (this.coordenadas.length < 3) {
        this.showErrorMessage('La ruta trazada es demasiado corta');
      } else {
        const lineString = this.geometryService.buildLineString(this.coordenadas);
        const recorrido: Recorrido = {
          Nombre: nombre,
          PuntosInteres: JSON.stringify(this.ptsInteresRuta),
          PuntosControl: JSON.stringify(this.puntosControl),
          Ruta: lineString,
          RutaText: lineString,
          TiempoEstimado: tiempoEst
        };
        const created = await this.recorridosService.nuevoRecorrido(recorrido);
        if (created) {
          this.router.navigateByUrl('/recorridos');
        } else {
          this.showErrorMessage('Ha ocurrido un error');
        }
      }
    }
  }

  showErrorMessage(message: string) {
    Swal.fire({
      icon: 'error',
      text: message
    });
  }

  getValidationClass(model: NgModel) {
    if (model.untouched && model.pristine) {
      return {};
    }
    return {'is-valid': model.valid, 'is-invalid': model.invalid};
  }

}
