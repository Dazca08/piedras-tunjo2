import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './inicio.component';
import { RouterModule } from '@angular/router';
import { PipesModule } from '../../../pipes/pipes.module';
import { ComponentsModule } from '../../../components/components.module';

@NgModule({
  declarations: [InicioComponent],
  imports: [
    CommonModule,
    PipesModule,
    ComponentsModule,
    RouterModule.forChild([{ path: '', component: InicioComponent }]),
  ]
})
export class InicioModule { }
