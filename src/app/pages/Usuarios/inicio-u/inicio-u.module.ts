import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioUComponent } from './inicio-u.component';
import { PipesModule } from '../../../pipes/pipes.module';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [InicioUComponent],
  imports: [
    CommonModule,
    FormsModule,
    NgxPaginationModule,
    PipesModule,
    RouterModule.forChild([{ path: '', component: InicioUComponent }])
  ]
})
export class InicioUModule { }
