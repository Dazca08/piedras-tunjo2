import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TicketsComponent } from './tickets.component';
import { ComponentsModule } from '../../../components/components.module';
import { FormsModule } from '@angular/forms';
import { PipesModule } from '../../../pipes/pipes.module';

@NgModule({
  declarations: [TicketsComponent],
  imports: [
    CommonModule,
    ComponentsModule,
    PipesModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: TicketsComponent }])
  ]
})
export class TicketsModule { }
