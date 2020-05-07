import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { VerificarComponent } from './verificar.component';
import { ComponentsModule } from '../../../components/components.module';
import { PipesModule } from '../../../pipes/pipes.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [VerificarComponent],
  imports: [
    CommonModule,
    ComponentsModule,
    PipesModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([{ path: '', component: VerificarComponent }])
  ]
})
export class VerificarModule { }
