import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioUccComponent } from './inicio-ucc.component';
import { PipesModule } from '../../../pipes/pipes.module';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';



@NgModule({
  declarations: [InicioUccComponent],
  imports: [
    CommonModule,
    FormsModule,
    NgxPaginationModule,
    PipesModule,
    RouterModule.forChild([{ path: '', component: InicioUccComponent }])
  ]
})
export class InicioUccModule { }
