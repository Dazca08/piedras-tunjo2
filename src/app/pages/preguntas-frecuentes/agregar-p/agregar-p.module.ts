import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgregarPComponent } from './agregar-p.component';
import { PipesModule } from '../../../pipes/pipes.module';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AgregarPComponent],
  imports: [
    CommonModule,
    FormsModule,
    PipesModule,
    RouterModule.forChild([{ path: '', component: AgregarPComponent }])
  ]
})
export class AgregarPModule { }
