import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DateService {

  public meses = ['Enero', 'Febrero', 'Marzo', 'Abril',
                'Mayo', 'Junio', 'Julio', 'Agosto',
                'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

  constructor() { }

  getYears() {
    const currentYear = new Date().getFullYear();
    return [currentYear, (currentYear - 1)];
  }
}
