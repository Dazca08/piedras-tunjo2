import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NuevoComponent } from './nuevo.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [NuevoComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([{ path: '', component: NuevoComponent }])
  ]
})
export class NuevoModule { }
