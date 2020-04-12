import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipesModule } from '../../../pipes/pipes.module';
import { RouterModule } from '@angular/router';
import { EditarpromComponent } from './editarprom.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [EditarpromComponent],
  imports: [
    CommonModule,
    FormsModule,
    PipesModule,
    RouterModule.forChild([{ path: '', component: EditarpromComponent }])
  ]
})
export class EditarpromModule { }
