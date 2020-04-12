import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgregarcComponent } from './agregarc.component';
import { RouterModule } from '@angular/router';
import { PipesModule } from '../../../pipes/pipes.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AgregarcComponent],
  imports: [
    CommonModule,
    FormsModule,
    PipesModule,
    RouterModule.forChild([{ path: '', component: AgregarcComponent }])
  ]
})
export class AgregarcModule { }
