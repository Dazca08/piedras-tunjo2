import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './inicio.component';
import { RouterModule } from '@angular/router';
import { ComponentsModule } from '../../../components/components.module';
import { PipesModule } from '../../../pipes/pipes.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [InicioComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: InicioComponent }]),
    ComponentsModule,
    PipesModule
  ]
})
export class InicioModule { }
