import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ContactanosComponent } from './contactanos.component';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  declarations: [ContactanosComponent],
  imports: [
    CommonModule,
    PipesModule,
    RouterModule.forChild([{ path: '', component: ContactanosComponent }])
  ]
})
export class ContactanosModule { }
