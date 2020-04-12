import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { EditarPicComponent } from './editar-pic.component';
import { PipesModule } from '../../../pipes/pipes.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [EditarPicComponent],
  imports: [
    CommonModule,
    FormsModule,
    PipesModule,
    RouterModule.forChild([{ path: '', component: EditarPicComponent }])
  ]
})
export class EditarPicModule { }
