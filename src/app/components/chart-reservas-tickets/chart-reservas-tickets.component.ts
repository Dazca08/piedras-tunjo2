import { Component, OnInit, Input } from '@angular/core';
import { ReservaTicket } from '../../interfaces/reserva-ticket.interface';
import { ChartType, ChartDataSets, ChartOptions } from 'chart.js';
import { Label } from 'ng2-charts';
import { ReservaTicketsService } from '../../services/reserva-tickets.service';

@Component({
  selector: 'app-chart-reservas-tickets',
  templateUrl: './chart-reservas-tickets.component.html',
  styleUrls: ['./chart-reservas-tickets.component.css']
})
export class ChartReservasTicketsComponent implements OnInit {

  @Input() reservas: ReservaTicket[];
  typeChart = 'line';

  public barChartOptions: ChartOptions = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: { xAxes: [{}], yAxes: [{}] },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      }
    }
  };
  public barChartLabels: Label[] = ['Enero', 'Febrero', 'Marzo', 'Abril',
                                    'Mayo', 'Junio', 'Julio', 'Agosto',
                                    'Septiembre', 'Octubre', 'Noviembre', 'Diciembre', ''];
  public barChartType: ChartType = 'line'; // bar
  public barChartLegend = true;

  public barChartData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55, 40, 50, 40, 40, 60, 40, 0], label: 'Meses' },
    // { data: [], label: 'Meses' },
  ];

  constructor(
    private reservaTickService: ReservaTicketsService
  ) {}

  ngOnInit() {
    this.prepareData();
  }

  prepareData() {
    const data = this.reservaTickService.getDataChart(this.reservas);
    this.barChartData[0].data = data;
  }

  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }
}
