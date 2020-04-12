import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// ComponentsModule
import { ComponentsModule } from '../components/components.module';
// PipesModule
import { PipesModule } from '../pipes/pipes.module';
// RoutingModule
import { PagesRoutingModule } from './pages-routing.module';

// Pages
import { TableroComponent } from './/tablero/tablero.component';
import { ConfiguracionComponent } from './configuracion/configuracion.component';
import { ContactanosComponent } from './contactanos/contactanos.component';
import { EventosComponent } from '../components/seccion-eventos/seccion-eventos.component';
import { ModuloQrComponent } from './modulo-qr/modulo-qr.component';
import { PreguntasFrecuentesComponent } from './preguntas-frecuentes/preguntas-frecuentes.component';
import { InicioAComponent } from './eventos/inicio-a/inicio-a.component';
import { AgregarComponent } from './eventos/agregar/agregar.component';
import { EditarComponent } from './eventos/editar/editar.component';
import { InicioPComponent } from './preguntas-frecuentes/administrador/inicio-p/inicio-p.component';
import { AgregarPComponent } from './preguntas-frecuentes/administrador/agregar-p/agregar-p.component';
import { EditarPComponent } from './preguntas-frecuentes/administrador/editar-p/editar-p.component';
import { IniciocComponent } from './cabana/inicioc/inicioc.component';
import { EditarcComponent } from './cabana/editarc/editarc.component';
import { AgregarcComponent } from './cabana/agregarc/agregarc.component';
import { InicioUComponent } from './Usuarios/administrador/inicio-u/inicio-u.component';
import { EditarUComponent } from './Usuarios/administrador/editar-u/editar-u.component';
import { AgregarUComponent } from './Usuarios/administrador/agregar-u/agregar-u.component';
import { AvatarSelectorComponent } from './Usuarios/administrador/avatar-selector/avatar-selector.component';
import { VerSubscripcionesComponent } from './subscripciones/ver-subscripciones/ver-subscripciones.component';
import { EditarSubscripcionesComponent } from './subscripciones/editar-subscripciones/editar-subscripciones.component';
import { InsertSubscripcionesComponent } from './subscripciones/insert-subscripciones/insert-subscripciones.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CalendarModule } from '@syncfusion/ej2-angular-calendars';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { ImageUploadModule } from 'angular2-image-upload';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { VerNoticiasComponent } from './noticias/ver-noticias/ver-noticias.component';
import { InsertNoticiasComponent } from './noticias/insert-noticias/insert-noticias.component';

//calendar

import { VerPictogramaComponent } from './pictogramas/ver-pictograma/ver-pictograma.component';
import { EditarPicComponent } from './pictogramas/editar-pic/editar-pic.component';
import { AgregarPicComponent } from './pictogramas/agregar-pic/agregar-pic.component';
import { IniciopromComponent } from './promociones/inicioprom/inicioprom.component';
import { AgregarpromComponent } from './promociones/agregarprom/agregarprom.component';
import { EditarpromComponent } from './promociones/editarprom/editarprom.component';


@NgModule({
  declarations: [
    TableroComponent,
    LoginComponent,
    ConfiguracionComponent,
    ContactanosComponent,
    EventosComponent,
    ModuloQrComponent,
    PreguntasFrecuentesComponent,
    InicioAComponent,
    AgregarComponent,
    EditarComponent,
    InicioPComponent,
    AgregarPComponent,
    EditarPComponent,
    IniciocComponent,
    EditarcComponent,
    AgregarcComponent,
    InicioUComponent,
    EditarUComponent,
    AgregarUComponent,
    AvatarSelectorComponent,
    VerSubscripcionesComponent,
    EditarSubscripcionesComponent,
    InsertSubscripcionesComponent,
    VerPictogramaComponent,
    EditarPicComponent,  
    AgregarPicComponent,
    HomeComponent,
    VerNoticiasComponent,
    InsertNoticiasComponent,
    IniciopromComponent,
    AgregarpromComponent,
    EditarpromComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PagesRoutingModule,
    ComponentsModule,
    PipesModule,
    CalendarModule,
    HttpClientModule,
    NgxPaginationModule,
    ImageUploadModule,
    
  ]
})
export class PagesModule { }
