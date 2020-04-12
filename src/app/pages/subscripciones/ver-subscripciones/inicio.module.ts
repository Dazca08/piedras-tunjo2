import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VerSubscripcionesComponent } from './ver-subscripciones.component';
import { PipesModule } from '../../../pipes/pipes.module';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [VerSubscripcionesComponent],
  imports: [
    CommonModule,
    FormsModule,
    NgxPaginationModule,
    PipesModule,
    RouterModule.forChild([{ path: '', component: VerSubscripcionesComponent }])
  ]
})
export class InicioModule { }
