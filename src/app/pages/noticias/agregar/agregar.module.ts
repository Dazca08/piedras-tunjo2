import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgregarComponent } from './agregar.component';
import { RouterModule } from '@angular/router';
import { ComponentsModule } from '../../../components/components.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AgregarComponent],
  imports: [
    CommonModule,
    ComponentsModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([{ path: '', component: AgregarComponent }])
  ]
})
export class AgregarModule { }
