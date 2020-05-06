import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportesRoutingModule } from './reportes-routing.module';
import { InicioComponent } from './inicio/inicio.component';
// charts
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [InicioComponent],
  imports: [
    CommonModule,
    ChartsModule,
    ReportesRoutingModule
  ]
})
export class ReportesModule { }
