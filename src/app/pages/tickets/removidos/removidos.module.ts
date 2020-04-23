import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RemovidosComponent} from './removidos.component';
import { RouterModule } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';



@NgModule({
  declarations: [RemovidosComponent],
  imports: [
    CommonModule,
    NgxPaginationModule,
    RouterModule.forChild([{ path: '', component: RemovidosComponent }]),
  ]
})
export class RemovidosModule { }

