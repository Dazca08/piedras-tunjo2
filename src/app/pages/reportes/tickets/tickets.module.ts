import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TicketsComponent } from './tickets.component';
import { ComponentsModule } from '../../../components/components.module';

@NgModule({
  declarations: [TicketsComponent],
  imports: [
    CommonModule,
    ComponentsModule,
    RouterModule.forChild([{ path: '', component: TicketsComponent }])
  ]
})
export class TicketsModule { }
