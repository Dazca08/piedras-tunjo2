import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactanosComponent } from './contactanos.component';
import { PipesModule } from '../../../pipes/pipes.module';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [ContactanosComponent ],
  imports: [
   CommonModule,
    FormsModule,
    NgxPaginationModule,
    PipesModule,
    RouterModule.forChild([{ path: '', component: ContactanosComponent }])
  ]
})
export class InicioModule { }
