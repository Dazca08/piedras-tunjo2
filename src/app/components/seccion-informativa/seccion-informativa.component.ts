import { Component, OnInit , ComponentFactoryResolver} from '@angular/core';
import { ServicioInfoService } from './servicio-info.service';

@Component({
  selector: 'app-seccion-informativa',
  templateUrl: './seccion-informativa.component.html',
  styleUrls: ['./seccion-informativa.component.css']
})
export class SeccionInformativaComponent implements OnInit {

  descripcion: any;
  reseniaHistorica: any;
  horario: any;

  constructor(
    private infoService: ServicioInfoService
  ) {}

  ngOnInit() {
    this.infoService.getInformacion()
                    .subscribe((res: any[]) => {
                      this.descripcion = res.find(x => x.id === 2);
                      this.reseniaHistorica = res.find(x => x.id === 4);
                      this.horario = res.find(x => x.id === 7);
                    });
  }
}
