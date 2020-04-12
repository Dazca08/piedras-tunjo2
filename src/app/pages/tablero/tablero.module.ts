import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableroComponent } from './tablero.component';
import { PipesModule } from '../../pipes/pipes.module';
import { RouterModule } from '@angular/router';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [TableroComponent],
  imports: [
    CommonModule,
    ComponentsModule,
    PipesModule,
    RouterModule.forChild([{ path: '', component: TableroComponent }])
  ]
})
export class TableroModule { }
