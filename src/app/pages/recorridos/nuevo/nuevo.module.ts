import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NuevoComponent } from './nuevo.component';
import { ComponentsModule } from '../../../components/components.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [NuevoComponent],
  imports: [
    CommonModule,
    FormsModule,
    ComponentsModule,
    RouterModule.forChild([{ path: '', component: NuevoComponent }])
  ]
})
export class NuevoModule { }
