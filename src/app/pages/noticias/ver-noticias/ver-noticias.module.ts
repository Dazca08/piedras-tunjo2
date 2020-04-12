import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipesModule } from '../../../pipes/pipes.module';
import { RouterModule } from '@angular/router';
import { VerNoticiasComponent } from './ver-noticias.component';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [VerNoticiasComponent],
  imports: [
    CommonModule,
    FormsModule,
    NgxPaginationModule,
    PipesModule,
    RouterModule.forChild([{ path: '', component: VerNoticiasComponent }])
  ]
})
export class VerNoticiasModule { }
