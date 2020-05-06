import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { InicioComponent } from './inicio.component';
import { AngularMaterialModule } from '../../../angular-material.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: InicioComponent }])
  ]
})
export class InicioModule { }
