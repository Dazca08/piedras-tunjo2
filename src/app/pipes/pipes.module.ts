import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterPipe } from './filter.pipe';
import { FilternPipe } from './filtern.pipe';
import { FiltroNPipe } from './filtro-n.pipe';
import { FiltroCorreoPipe } from './filtro-correo.pipe';
import { ImgServerPipe } from './img-server.pipe';
import { FiltropicPipe } from './filtropic.pipe';
import { FiltroNoticiasPipe } from './filtro-noticias.pipe';
import { FiltropromPipe } from './filtroprom.pipe';
import { FiltropqrsPipe } from './filtropqrs.pipe';
import { ImgUrlToArrayPipe } from './img-url-to-array.pipe';
import { ReservasMesPipe } from './reservas-mes.pipe';
import { RolesCreatePipe } from './roles-create.pipe';
import { UsersByRolPipe } from './users-by-rol.pipe';
import { UsersByStatePipe } from './users-by-state.pipe';


@NgModule({
  declarations: [
    FilterPipe,
    FilternPipe,
    FiltroNPipe,
    FiltroCorreoPipe,
    ImgServerPipe,
    FiltropicPipe,
    FiltroNoticiasPipe,
    FiltropromPipe,
    FiltropqrsPipe,
    ImgUrlToArrayPipe,
    ReservasMesPipe,
    RolesCreatePipe,
    UsersByRolPipe,
    UsersByStatePipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FilterPipe,
    FilternPipe,
    FiltroNPipe,
    FiltroCorreoPipe,
    ImgServerPipe,
    FiltropicPipe,
    FiltroNoticiasPipe,
    FiltropromPipe,
    FiltropqrsPipe,
    ImgUrlToArrayPipe,
    ReservasMesPipe,
    RolesCreatePipe,
    UsersByRolPipe,
    UsersByStatePipe
  ]
})
export class PipesModule { }
