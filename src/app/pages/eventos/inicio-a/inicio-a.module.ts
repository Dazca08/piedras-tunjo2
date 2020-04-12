import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { InicioAComponent } from './inicio-a.component';
import { PipesModule } from '../../../pipes/pipes.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [InicioAComponent],
  imports: [
    CommonModule,
    PipesModule,
    FormsModule,
    NgxPaginationModule,
    RouterModule.forChild([{ path: '', component: InicioAComponent }]),
  ]
})
export class InicioAModule { }
