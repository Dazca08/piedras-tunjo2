import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportesRoutingModule } from './reportes-routing.module';
import { InicioComponent } from './inicio/inicio.component';
// charts
import { ChartsModule } from 'ng2-charts';
import { AngularMaterialModule } from '../../angular-material.module';

@NgModule({
  declarations: [InicioComponent],
  imports: [
    CommonModule,
    ChartsModule,
    AngularMaterialModule,
    ReportesRoutingModule
  ]
})
export class ReportesModule { }
