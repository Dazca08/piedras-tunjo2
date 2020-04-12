import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgregarUComponent } from './agregar-u.component';
import { PipesModule } from '../../../pipes/pipes.module';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ComponentsModule } from '../../../components/components.module';

@NgModule({
  declarations: [AgregarUComponent],
  imports: [
    CommonModule,
    FormsModule,
    ComponentsModule,
    PipesModule,
    RouterModule.forChild([{ path: '', component: AgregarUComponent }])
  ]
})
export class AgregarUModule { }
