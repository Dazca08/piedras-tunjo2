import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as Mapboxgl from 'mapbox-gl';
import { environment } from '../../../environments/environment';
import Swal from 'sweetalert2';
import { ServiciomapaService } from 'src/app/services/serviciomapa.service';
import { PuntoInteres } from 'src/app/interfaces/punto-interes.interface';
@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit , AfterViewInit {
  mapa1: Mapboxgl.Map;
  puntosInteres: PuntoInteres[] = [];
  currentMarkers = [];
  constructor(private puntosService: ServiciomapaService) { }

 ngAfterViewInit(): void {
    Mapboxgl.accessToken = environment.mapboxToken;
    this.mapa1 = new Mapboxgl.Map({
      container: 'mapa',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-74.3451602, 4.8154681],
      zoom: 15
    });

    this.mapa1.on('load', () => {
      this.loadPuntosInteres();
    });

  }

  ngOnInit(): void {
  }

  loadPuntosInteres() {
   /* Swal.fire({
      title: 'Espere por favor',
      text: 'Cargando información',
      icon: 'info',
      allowOutsideClick: false
    });
    Swal.showLoading();*/
    // Cargar los puntos de interes
    this.puntosService.getPuntosInteres()
                      .subscribe(puntos => {
                        this.puntosInteres = puntos;
                        this.addMarkersToMap();
                        Swal.close();
                      });
  }

  addMarkersToMap() {
    this.currentMarkers = [];
    this.puntosInteres.forEach((punto) => {
      // const popup = new Mapboxgl.Popup({offset: 25})
      //                             .setText(punto.Descripcion);
      const marker = new Mapboxgl.Marker()
                                .setLngLat([punto.Longitud, punto.Latitud])
                                // .setPopup(popup)
                                .addTo(this.mapa1);
      this.currentMarkers.push(marker);
      // const { lng, lat } = marker._lngLat;
      // click
      marker.getElement().addEventListener('click', () => {
        setTimeout(() => {
          // actualizar marcador
          this.processMarker(punto.Longitud, punto.Latitud, punto.Descripcion);
        }, 10);
        // el timeout es para esperar a que el mapa click se adelante y poder cerrarlo con esta nueva llamada
      });
      // mouseenter cambiar cursor
      marker._element.addEventListener('mouseenter', () => {
        marker._element.style.cursor = 'pointer';
      });
    });
  }

  async processMarker(lng: number, lat: number, desc: string = '') {
           const Toast = Swal.mixin({
  toast: true,
  showConfirmButton: true,
  width:400,
  timer: 3000,
  timerProgressBar: true,
  onOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer)
    toast.addEventListener('mouseleave', Swal.resumeTimer)
  }
})

Toast.fire({

  text:'Aqui se encuentra  ubicado el punto de interes:   '+ desc,

})
  
  }




}
