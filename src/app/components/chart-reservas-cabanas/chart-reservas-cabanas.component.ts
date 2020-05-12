import { Component, OnInit, Input } from '@angular/core';
import { CabanasService } from '../../services/cabanas.service';
import { ReservaCabana } from '../../interfaces/reserva-cabana.interface';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
import { ReservaCabanasService } from '../../services/reserva-cabanas.service';
import { DateService } from '../../services/date.service';

@Component({
  selector: 'app-chart-reservas-cabanas',
  templateUrl: './chart-reservas-cabanas.component.html',
  styleUrls: ['./chart-reservas-cabanas.component.css']
})
export class ChartReservasCabanasComponent implements OnInit {

  @Input() reservas: ReservaCabana[];
  selectedYear = new Date().getFullYear();
  years = [];
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
  // public barChartType: ChartType = 'line'; // bar
  public barChartLegend = true;

  public barChartData: ChartDataSets[] = [
    { data: [], label: 'Meses' },
  ];

  constructor(
    private reservaCabService: ReservaCabanasService,
    private dateService: DateService
  ) {}

  ngOnInit() {
    this.years = this.dateService.getYears();
    this.prepareData();
  }

  prepareData(year: number = new Date().getFullYear()) {
    const data = this.reservaCabService.getDataChart(this.reservas, year);
    this.barChartData[0].data = data;
  }

  onChange(event: any) {
    const year = event.target.value;
    this.prepareData(year);
  }

  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

}
