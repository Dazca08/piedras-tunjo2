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
    const currentYears = new Date().getFullYear();
    const years = [];
    for (let i = 2; i >= 0; i--) {
      years.push(currentYears - i);
    }
    return years;
  }
}
