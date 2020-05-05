import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AgregarComponent } from './agregar.component';

@NgModule({
  declarations: [AgregarComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: AgregarComponent }])
  ]
})
export class AgregarModule { }
