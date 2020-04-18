import { Component, OnInit, Input } from '@angular/core';
import * as uuid from 'uuid';

@Component({
  selector: 'app-carousel-images',
  templateUrl: './carousel-images.component.html',
  styleUrls: ['./carousel-images.component.css']
})
export class CarouselImagesComponent implements OnInit {

  @Input() imagenes: string[] = [];
  @Input() tipo: string;
  carouselId: string;

  constructor() { }

  ngOnInit(): void {
    this.carouselId = 'carousel-' + uuid.v4();
  }

}
