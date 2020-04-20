import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as Mapboxgl from 'mapbox-gl';
import { PictogramaService } from 'src/app/services/pictograma.service';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-mapa-picto',
  templateUrl: './mapa-picto.component.html',
  styleUrls: ['./mapa-picto.component.css']
})
export class MapaPictoComponent implements OnInit, AfterViewInit {

  mapa: Mapboxgl.Map;

  constructor(
    private pictogramaService: PictogramaService
  ) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    Mapboxgl.accessToken = environment.mapboxToken;
    this.mapa = new Mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-74.3451602, 4.8154681],
      zoom: 15
    });

    this.mapa.on('load', () => {
      this.loadPictogramas();
    });

    this.mapa.on('click', async (e: any) => {
      const { lng, lat } = e.lngLat;
    });
  }

  async loadPictogramas() {
    const pictogramas = await this.pictogramaService.getPictogramas();
    pictogramas.forEach(picto => {
      const popup = new Mapboxgl.Popup({ offset: 25 }).setText(picto.Nombre);
      const marker = new Mapboxgl.Marker()
                                .setLngLat([picto.Longitud, picto.Latitud])
                                .setPopup(popup)
                                .addTo(this.mapa);
    });
  }

}
