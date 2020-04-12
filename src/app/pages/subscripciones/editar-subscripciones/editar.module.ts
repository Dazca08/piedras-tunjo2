import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditarSubscripcionesComponent } from './editar-subscripciones.component';
import { PipesModule } from '../../../pipes/pipes.module';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [EditarSubscripcionesComponent],
  imports: [
    CommonModule,
    FormsModule,
    PipesModule,
    RouterModule.forChild([{ path: '', component: EditarSubscripcionesComponent }])
  ]
})
export class EditarModule { }
