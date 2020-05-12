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
import { CabanafiltroPipe } from './cabanafiltro.pipe';
import { NoticiasfiltroPipe } from './noticiasfiltro.pipe';
import { NumDocFilterPipe } from './num-doc-filter.pipe';
import { ArrayFilterPipe } from './array-filter.pipe';
import { ReservasYearPipe } from './reservas-year.pipe';


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
    UsersByStatePipe,
    CabanafiltroPipe,
    NoticiasfiltroPipe,
    NumDocFilterPipe,
    ArrayFilterPipe,
    ReservasYearPipe
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
    UsersByStatePipe,
    CabanafiltroPipe,
    NoticiasfiltroPipe,
    NumDocFilterPipe,
    ArrayFilterPipe,
    ReservasYearPipe
  ]
})
export class PipesModule { }
