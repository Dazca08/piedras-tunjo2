import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-configuracion',
  templateUrl: './configuracion.component.html',
  styleUrls: ['./configuracion.component.css']
})
export class ConfiguracionComponent implements OnInit {

  files: File[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  changeFiles(files: File[]) {
    // console.log(files);
  }

}
