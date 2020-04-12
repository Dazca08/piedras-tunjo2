import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AgregarComponent } from './agregar.component';
import { PipesModule } from '../../../pipes/pipes.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AgregarComponent],
  imports: [
    CommonModule,
    FormsModule,
    PipesModule,
    RouterModule.forChild([{ path: '', component: AgregarComponent }])
  ]
})
export class AgregarModule { }
