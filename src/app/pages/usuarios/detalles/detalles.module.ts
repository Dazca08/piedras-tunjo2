import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetallesComponent } from './detalles.component';
import { RouterModule } from '@angular/router';
import { PipesModule } from '../../../pipes/pipes.module';
import { ComponentsModule } from '../../../components/components.module';

@NgModule({
  declarations: [DetallesComponent],
  imports: [
    CommonModule,
    PipesModule,
    ComponentsModule,
    RouterModule.forChild([{ path: '', component: DetallesComponent }])
  ]
})
export class DetallesModule { }
