import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditarComponent } from './editar.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [EditarComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: EditarComponent }])
  ]
})
export class EditarModule { }
