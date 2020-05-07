import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CabanasComponent } from './cabanas.component';
import { ComponentsModule } from '../../../components/components.module';

@NgModule({
  declarations: [CabanasComponent],
  imports: [
    CommonModule,
    ComponentsModule,
    RouterModule.forChild([{ path: '', component: CabanasComponent }])
  ]
})
export class CabanasModule { }
