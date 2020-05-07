import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UsuariosPendientesComponent } from './usuarios-pendientes.component';
import { ComponentsModule } from '../../../components/components.module';
import { PipesModule } from '../../../pipes/pipes.module';

@NgModule({
  declarations: [UsuariosPendientesComponent],
  imports: [
    CommonModule,
    ComponentsModule,
    PipesModule,
    RouterModule.forChild([{ path: '', component: UsuariosPendientesComponent }])
  ]
})
export class InicioModule { }
