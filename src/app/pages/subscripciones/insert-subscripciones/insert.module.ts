import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InsertSubscripcionesComponent } from './insert-subscripciones.component';
import { RouterModule } from '@angular/router';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [InsertSubscripcionesComponent],
  imports: [
    CommonModule,
    FormsModule,
    PipesModule,
    RouterModule.forChild([{ path: '', component: InsertSubscripcionesComponent }])
  ]
})
export class InsertModule { }
