import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NuevoComponent } from './nuevo.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComponentsModule } from '../../../components/components.module';

@NgModule({
  declarations: [NuevoComponent],
  imports: [
    CommonModule,
    FormsModule,
    ComponentsModule,
    ReactiveFormsModule,
    RouterModule.forChild([{ path: '', component: NuevoComponent }])
  ]
})
export class NuevoModule { }
