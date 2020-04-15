import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioUdComponent } from './inicio-ud.component';
import { PipesModule } from '../../../pipes/pipes.module';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    NgxPaginationModule,
    PipesModule,
    RouterModule.forChild([{ path: '', component: InicioUdComponent }])
  ]
})
export class InicioUdModule { }
