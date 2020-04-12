import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { EditarComponent } from './editar.component';
import { PipesModule } from '../../../pipes/pipes.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [EditarComponent],
  imports: [
    CommonModule,
    FormsModule,
    PipesModule,
    RouterModule.forChild([{ path: '', component: EditarComponent }])
  ]
})
export class EditarModule { }
