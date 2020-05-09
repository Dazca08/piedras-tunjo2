import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './inicio.component';
import { RouterModule } from '@angular/router';
import { ComponentsModule } from '../../../components/components.module';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [InicioComponent],
  imports: [
    CommonModule,
    ComponentsModule,
    FormsModule,
    PipesModule,
    RouterModule.forChild([{ path: '', component: InicioComponent }])
  ]
})
export class InicioModule { }
