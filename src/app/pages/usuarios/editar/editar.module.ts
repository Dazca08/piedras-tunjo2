import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { EditarComponent } from './editar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComponentsModule } from '../../../components/components.module';
import { PipesModule } from '../../../pipes/pipes.module';

@NgModule({
  declarations: [EditarComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ComponentsModule,
    PipesModule,
    RouterModule.forChild([{ path: '', component: EditarComponent }])
  ]
})
export class EditarModule { }
