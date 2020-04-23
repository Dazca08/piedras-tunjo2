import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './inicio.component';
import { RouterModule } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';




@NgModule({
  declarations: [InicioComponent],
  imports: [
    CommonModule,
    NgxPaginationModule,
    RouterModule.forChild([{ path: '', component: InicioComponent }]),
  ]
})
export class InicioModule { }
