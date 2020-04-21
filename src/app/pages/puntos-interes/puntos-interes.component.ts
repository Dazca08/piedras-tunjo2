import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as Mapboxgl from 'mapbox-gl';
import { environment } from '../../../environments/environment';
import Swal from 'sweetalert2';
import { PuntosInteresService } from '../../services/puntos-interes.service';
import { PuntoInteres } from 'src/app/interfaces/punto-interes.interface';


declare var $: any;

@Component({
  selector: 'app-puntos-interes',
  templateUrl: './puntos-interes.component.html',
  styleUrls: ['./puntos-interes.component.css']
})
export class PuntosInteresComponent implements OnInit, AfterViewInit {

  mapa: Mapboxgl.Map;
  puntosInteres: PuntoInteres[] = [];
  currentMarkers = [];

  constructor(
    private puntosService: PuntosInteresService
  ) { }

  ngAfterViewInit(): void {
    Mapboxgl.accessToken = environment.mapboxToken;
    this.mapa = new Mapboxgl.Map({
      container: 'map-puntos-interes',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-74.3451602, 4.8154681],
      zoom: 15
    });

    this.mapa.on('load', () => {
      this.loadPuntosInteres();
    });

    this.mapa.on('click', async (e: any) => {
      const { lng, lat } = e.lngLat;
      // nuevo marcador
      this.processMarker(lng, lat);
    });
  }

  ngOnInit(): void {
  }

  loadPuntosInteres() {
    Swal.fire({
      title: 'Espere por favor',
      text: 'Cargando información',
      icon: 'info',
      allowOutsideClick: false
    });
    Swal.showLoading();

    // Cargar los puntos de interes
    this.puntosService.getPuntosInteres().then(res => {
      this.puntosInteres = res;
      this.addMarkersToMap();
      Swal.close();
    });
  }

  addMarkersToMap() {
    this.currentMarkers = [];
    this.puntosInteres.forEach((punto) => {
      const marker = new Mapboxgl.Marker()
                                .setLngLat([punto.Longitud, punto.Latitud])
                                .addTo(this.mapa);
      this.currentMarkers.push(marker);
      // const { lng, lat } = marker._lngLat;

      marker.getElement().addEventListener('click', () => {
        setTimeout(() => {
          // actualizar marcador
          this.processMarker(punto.Longitud, punto.Latitud, punto.Descripcion);
        }, 10);
        // el timeout es para esperar a que el mapa click se adelante y poder cerrarlo con esta nueva llamada
      });

      // mouseenter cambiar cursor  //_element y getElemento son iguales
      marker._element.addEventListener('mouseenter', () => {
        marker._element.style.cursor = 'pointer';
      });
    });
  }

  async processMarker(lng: number, lat: number, desc: string = '') {
    Swal.fire({
      title: (desc === '' ? 'CREAR' : 'MODIFICAR') + ' PUNTO DE INTERÉS',
      text: 'Ingresa una descripción',
      input: 'text',
      inputValue: desc,
      showCancelButton: desc !== '',
      confirmButtonText: desc === '' ? 'Crear' : 'Actualizar',
      cancelButtonColor: '#d33',
      cancelButtonText: 'Eliminar',
      showCloseButton: true,
      inputValidator: (value) => {
        if (!value) {
          return 'Necesitas escribir algo!';
        }
      }
    }).then(async (res) => {
      if (res.value) {
        if (desc === '') {
          // Nuevo punto de interes
          const punto: PuntoInteres = {
            Descripcion: res.value,
            Latitud: lat,
            Longitud: lng
          };
          const created = await this.puntosService.postPuntosInteres(punto);
        } else {
          // Actualizar punto de interes
          const punto = this.puntosInteres.find(x => x.Longitud === lng && x.Latitud === lat);
          punto.Descripcion = res.value;
          const updated = await this.puntosService.putPuntosInteres(punto);
        }
        setTimeout(() => {
          this.loadPuntosInteres();
        }, 500);
      } else {
        if (res.dismiss.toString() === 'cancel') {
          // Eliminar punto de interes
          const { Id } = this.puntosInteres.find(x => x.Longitud === lng && x.Latitud === lat);
          this.openConfirmAlert(Id);
        }
      }
    });
  }

  openConfirmAlert(id: number) {
    Swal.fire({
      title: '¿Estás seguro?',
      text: 'No podrás revertir la acción',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar'
    }).then(async (result) => {
      if (result.value) {
        const deleted = await this.puntosService.deletePuntosInteres(id);
        if (deleted) {
          $('#form1').submit();
        }
      }
    });
  }

  // deleteCurrentMarkers() {
  //   this.currentMarkers.forEach((x, index) => {
  //     this.currentMarkers[index].remove();
  //   });
  //   this.currentMarkers = [];
  // }

}
