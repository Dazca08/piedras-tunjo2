import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgregarPicComponent } from './agregar-pic.component';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AgregarPicComponent],
  imports: [
    CommonModule,
    FormsModule,
    PipesModule,
    RouterModule.forChild([{ path: '', component: AgregarPicComponent }])
  ]
})
export class AgregarPicModule { }
