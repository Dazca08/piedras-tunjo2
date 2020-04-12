import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditarPComponent } from './editar-p.component';
import { PipesModule } from '../../../pipes/pipes.module';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [EditarPComponent],
  imports: [
    CommonModule,
    FormsModule,
    PipesModule,
    RouterModule.forChild([{ path: '', component: EditarPComponent }])
  ]
})
export class EditarPModule { }
