import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IniciocComponent } from './inicioc.component';
import { PipesModule } from '../../../pipes/pipes.module';

@NgModule({
  declarations: [IniciocComponent],
  imports: [
    CommonModule,
    PipesModule,
    RouterModule.forChild([{ path: '', component: IniciocComponent }])
  ]
})
export class IniciocModule { }
