import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapaPictoComponent } from './mapa-picto.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [MapaPictoComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: MapaPictoComponent }])
  ]
})
export class MapaPictoModule { }
