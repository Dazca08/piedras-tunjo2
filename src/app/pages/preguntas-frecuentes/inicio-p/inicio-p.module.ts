import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioPComponent } from './inicio-p.component';
import { PipesModule } from '../../../pipes/pipes.module';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [InicioPComponent],
  imports: [
    CommonModule,
    FormsModule,
    NgxPaginationModule,
    PipesModule,
    RouterModule.forChild([{ path: '', component: InicioPComponent }])
  ]
})
export class InicioPModule { }
