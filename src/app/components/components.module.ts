import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Chartjs
import { ChartsModule } from 'ng2-charts';
// PipesModule
import { PipesModule } from '../pipes/pipes.module';
// Components
import { PiePaginaComponent } from './pie-pagina/pie-pagina.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { SeccionInformativaComponent } from './seccion-informativa/seccion-informativa.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AvatarSelectorComponent } from './avatar-selector/avatar-selector.component';
import { MapaComponent } from './mapa/mapa.component';
import { EventosComponent } from './seccion-eventos/seccion-eventos.component';
import { ImagesUploadComponent } from './images-upload/images-upload.component';
import { CarouselImagesComponent } from './carousel-images/carousel-images.component';
import { SelectCoordinatesComponent } from './select-coordinates/select-coordinates.component';
import { CardRecorridoComponent } from './card-recorrido/card-recorrido.component';
import { ChartReservasTicketsComponent } from './chart-reservas-tickets/chart-reservas-tickets.component';
import { ChartReservasCabanasComponent } from './chart-reservas-cabanas/chart-reservas-cabanas.component';
import { ShowUsuariosComponent } from './show-usuarios/show-usuarios.component';

@NgModule({
  declarations: [
    PiePaginaComponent,
    GaleriaComponent,
    SeccionInformativaComponent,
    EventosComponent,
    NavbarComponent,
    SidebarComponent,
    MapaComponent,
    AvatarSelectorComponent,
    ImagesUploadComponent,
    CarouselImagesComponent,
    SelectCoordinatesComponent,
    CardRecorridoComponent,
    ChartReservasTicketsComponent,
    ChartReservasCabanasComponent,
    ShowUsuariosComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    PipesModule,
    ChartsModule
  ],
  exports: [
    PiePaginaComponent,
    GaleriaComponent,
    SeccionInformativaComponent,
    EventosComponent,
    NavbarComponent,
    SidebarComponent,
    MapaComponent,
    AvatarSelectorComponent,
    ImagesUploadComponent,
    CarouselImagesComponent,
    SelectCoordinatesComponent,
    CardRecorridoComponent,
    ChartReservasTicketsComponent,
    ChartReservasCabanasComponent,
    ShowUsuariosComponent
  ]
})
export class ComponentsModule { }
