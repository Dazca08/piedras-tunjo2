import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditarNoticiasComponent } from './editar-noticias.component';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [EditarNoticiasComponent],
  imports: [
    CommonModule,
    FormsModule,
    PipesModule,
    RouterModule.forChild([{ path: '', component: EditarNoticiasComponent }])
  ]
})
export class EditarModule { }
