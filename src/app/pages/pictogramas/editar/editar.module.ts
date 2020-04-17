import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { EditarComponent } from './editar.component';
import { PipesModule } from '../../../pipes/pipes.module';

@NgModule({
  declarations: [EditarComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PipesModule,
    RouterModule.forChild([{ path: '', component: EditarComponent }])
  ]
})
export class EditarModule { }
