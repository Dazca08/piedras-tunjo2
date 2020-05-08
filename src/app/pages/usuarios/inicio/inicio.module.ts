import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './inicio.component';
import { RouterModule } from '@angular/router';
import { PipesModule } from '../../../pipes/pipes.module';
import { FormsModule } from '@angular/forms';
import { ComponentsModule } from '../../../components/components.module';

@NgModule({
  declarations: [InicioComponent],
  imports: [
    CommonModule,
    PipesModule,
    FormsModule,
    ComponentsModule,
    RouterModule.forChild([{ path: '', component: InicioComponent }])
  ]
})
export class InicioModule { }
