import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VerPictogramaComponent } from './ver-pictograma.component';
import { PipesModule } from '../../../pipes/pipes.module';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [VerPictogramaComponent],
  imports: [
    CommonModule,
    FormsModule,
    NgxPaginationModule,
    PipesModule,
    RouterModule.forChild([{ path: '', component: VerPictogramaComponent }])
  ]
})
export class VerPictogramaModule { }
