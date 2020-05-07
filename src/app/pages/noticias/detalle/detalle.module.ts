import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DetalleComponent } from './detalle.component';
import { ComponentsModule } from '../../../components/components.module';
import { PipesModule } from '../../../pipes/pipes.module';

@NgModule({
  declarations: [DetalleComponent],
  imports: [
    CommonModule,
    ComponentsModule,
    PipesModule,
    RouterModule.forChild([{ path: '', component: DetalleComponent }])
  ]
})
export class DetalleModule { }
