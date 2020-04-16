import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './inicio.component';
import { RouterModule } from '@angular/router';
import { PipesModule } from '../../../pipes/pipes.module';

@NgModule({
  declarations: [InicioComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: InicioComponent }]),
    PipesModule
  ]
})
export class InicioModule { }
