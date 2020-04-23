import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GeometryService {

  constructor() { }

  buildLineString(coordenadas: number[][]): string {
    // console.log(coordenadas);
    let lineString = 'LINESTRING(';
    coordenadas.forEach((coord, index) => {
      const [lng, lat] = coord;
      lineString += `${ lng } ${ lat },`;
    });
    lineString = lineString.slice(0, (lineString.length - 1));
    lineString += ')';
    return lineString;
  }

  getCoordinates(lineString: string) {
    const coordinates = [];
    lineString = lineString.split('(')[1].replace(')', '');
    // console.log(lineString);
    lineString.split(',').forEach(x => {
      const [lng, lat] = x.split(' ');
      coordinates.push([Number(lng), Number(lat)]);
    });
    return coordinates;
  }
}
