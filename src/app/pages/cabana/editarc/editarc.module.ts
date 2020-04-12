import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditarcComponent } from './editarc.component';
import { RouterModule } from '@angular/router';
import { PipesModule } from '../../../pipes/pipes.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [EditarcComponent],
  imports: [
    CommonModule,
    FormsModule,
    PipesModule,
    RouterModule.forChild([{ path: '', component: EditarcComponent }])
  ]
})
export class EditarcModule { }
