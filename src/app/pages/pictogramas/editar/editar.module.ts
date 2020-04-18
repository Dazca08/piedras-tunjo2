import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { EditarComponent } from './editar.component';
import { PipesModule } from '../../../pipes/pipes.module';
import { ComponentsModule } from '../../../components/components.module';

@NgModule({
  declarations: [EditarComponent],
  imports: [
    CommonModule,
    FormsModule,
    PipesModule,
    ComponentsModule,
    ReactiveFormsModule,
    RouterModule.forChild([{ path: '', component: EditarComponent }])
  ]
})
export class EditarModule { }
