import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModuloQrComponent } from './modulo-qr.component';
import { PipesModule } from '../../pipes/pipes.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ModuloQrComponent],
  imports: [
    CommonModule,
    PipesModule,
    RouterModule.forChild([{ path: '', component: ModuloQrComponent }])
  ]
})
export class QrModule { }
