import { Component, OnInit } from '@angular/core';
import { ReservaCabana } from '../../../interfaces/reserva-cabana.interface';
import { ReservaCabanasService } from 'src/app/services/reserva-cabanas.service';

@Component({
  selector: 'app-cabanas',
  templateUrl: './cabanas.component.html',
  styleUrls: ['./cabanas.component.css']
})
export class CabanasComponent implements OnInit {

  reservaCabanas: ReservaCabana[];
  verGrafica = false;

  constructor(
    private reservaCabService: ReservaCabanasService
  ) { }

  ngOnInit(): void {
    this.prepare();
  }

  async prepare() {
    this.reservaCabanas = await this.reservaCabService.getReservasCabanas();
  }

}
