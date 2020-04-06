import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// PipesModule
import { PipesModule } from '../pipes/pipes.module';

// Components
import { PiePaginaComponent } from './pie-pagina/pie-pagina.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { SeccionInformativaComponent } from './seccion-informativa/seccion-informativa.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  declarations: [
    PiePaginaComponent,
    GaleriaComponent,
    SeccionInformativaComponent,
    NavbarComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    PipesModule
  ],
  exports: [
    PiePaginaComponent,
    GaleriaComponent,
    SeccionInformativaComponent,
    NavbarComponent,
    SidebarComponent
  ]
})
export class ComponentsModule { }
