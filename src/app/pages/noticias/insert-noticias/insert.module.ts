import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InsertNoticiasComponent } from './insert-noticias.component';
import { PipesModule } from '../../../pipes/pipes.module';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [InsertNoticiasComponent],
  imports: [
    CommonModule,
    FormsModule,
    PipesModule,
    RouterModule.forChild([{ path: '', component: InsertNoticiasComponent }])
  ]
})
export class InsertModule { }
