import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipesModule } from '../../../pipes/pipes.module';
import { RouterModule } from '@angular/router';
import { VentaTComponent } from './venta-t.component';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [VentaTComponent],
  imports: [
    
   CommonModule,
    FormsModule,
    NgxPaginationModule,
    PipesModule,
    RouterModule.forChild([{ path: '', component: VentaTComponent}])
  ]
})
export class VentamoduleModule { }
