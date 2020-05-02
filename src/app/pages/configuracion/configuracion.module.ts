import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfiguracionComponent } from './configuracion.component';
import { RouterModule } from '@angular/router';
import { PipesModule } from '../../pipes/pipes.module';
import { ComponentsModule } from '../../components/components.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ConfiguracionComponent],
  imports: [
    CommonModule,
    PipesModule,
    ComponentsModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([{ path: '', component: ConfiguracionComponent }])
  ]
})
export class ConfiguracionModule { }
