import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PuntosInteresComponent } from './puntos-interes.component';
import { PipesModule } from '../../pipes/pipes.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [PuntosInteresComponent],
  imports: [
    CommonModule,
    PipesModule,
    RouterModule.forChild([{ path: '', component: PuntosInteresComponent }])
  ]
})
export class PuntosInteresModule { }
