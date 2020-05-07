import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CabanasComponent } from './cabanas.component';
import { ComponentsModule } from '../../../components/components.module';
import { FormsModule } from '@angular/forms';
import { PipesModule } from '../../../pipes/pipes.module';

@NgModule({
  declarations: [CabanasComponent],
  imports: [
    CommonModule,
    FormsModule,
    ComponentsModule,
    PipesModule,
    RouterModule.forChild([{ path: '', component: CabanasComponent }])
  ]
})
export class CabanasModule { }
