import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgregarpromComponent } from './agregarprom.component';
import { PipesModule } from '../../../pipes/pipes.module';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AgregarpromComponent],
  imports: [
    CommonModule,
    FormsModule,
    PipesModule,
    RouterModule.forChild([{ path: '', component: AgregarpromComponent }])
  ]
})
export class AgregarpromModule { }
