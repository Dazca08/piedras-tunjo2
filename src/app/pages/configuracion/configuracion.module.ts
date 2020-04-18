import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfiguracionComponent } from './configuracion.component';
import { RouterModule } from '@angular/router';
import { PipesModule } from '../../pipes/pipes.module';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [ConfiguracionComponent],
  imports: [
    CommonModule,
    PipesModule,
    ComponentsModule,
    RouterModule.forChild([{ path: '', component: ConfiguracionComponent }])
  ]
})
export class ConfiguracionModule { }
