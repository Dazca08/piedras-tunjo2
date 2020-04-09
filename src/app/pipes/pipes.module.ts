import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterPipe } from './filter.pipe';
import { FiltroSubscripcionesPipe } from './filtro-subscripciones.pipe';
import { FilternPipe } from './filtern.pipe';
import { FiltroNPipe } from './filtro-n.pipe';
import { FiltroCorreoPipe } from './filtro-correo.pipe';
import { ImgServerPipe } from './img-server.pipe';
import { FiltropicPipe } from './filtropic.pipe';
import { FiltroNoticiasPipe } from './filtro-noticias.pipe';
import { FiltropromPipe } from './filtroprom.pipe';


@NgModule({
  declarations: [
    FilterPipe,
    FiltroSubscripcionesPipe,
    FilternPipe,
    FiltroNPipe,
    FiltroCorreoPipe,
    ImgServerPipe,
    FiltropicPipe,
    FiltroNoticiasPipe,
    FiltropromPipe,

  ],
  imports: [
    CommonModule
  ],
  exports: [
    FilterPipe,
    FiltroSubscripcionesPipe,
    FilternPipe,
    FiltroNPipe,
    FiltroCorreoPipe,
    ImgServerPipe,
    FiltropicPipe,
    FiltroNoticiasPipe,
    FiltropromPipe

    
  ]
})
export class PipesModule { }
