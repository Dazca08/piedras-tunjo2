import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Pictograma } from '../../../interfaces/pictograma.interface';
import { PictogramaService } from '../../../services/pictograma.service';
import Swal from 'sweetalert2';
import { ImagesService } from '../../../services/images.service';
import { basicAnimate } from '../../../animations';

declare var document: any;
declare var $: any;

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
  animations: [
    basicAnimate,
    // otros triggers
  ]
})
export class InicioComponent implements OnInit {
 PageActual:number=1;
  pictogramas: Pictograma[] = [];
  nombrePicto = '';

  constructor(
    private pictogramaService: PictogramaService,
    private imagesService: ImagesService
  ) { }

  ngOnInit(): void {
    this.obtenerPictogramas();
  }

  async obtenerPictogramas() {
    this.pictogramas = await this.pictogramaService.getPictogramas();

    // igualar height de las cards de pictogramas
    setTimeout(() => {
      const cards = $('.card-picto');
      let maxHeight = 0;
      cards.each((e) => {
        const height = cards[e].offsetHeight;
        if (height > maxHeight) {
          maxHeight = height;
        }
      });
      cards.each((e) => {
        cards[e].style.height = maxHeight;
      });
    }, 1000);
  }

  showConfirmAlert(pictograma: Pictograma) {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You wont be able to revert this!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then(async (result) => {
      if (result.value) {
        const deleted = await this.pictogramaService.eliminar(pictograma.Id);
        if (deleted) {
          await this.imagesService.deleteImages(pictograma.ImagenesUrl, 'picto');
          this.pictogramas = this.pictogramas.filter(x => x.Id !== pictograma.Id);
          Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          );
        }
      }
    });
  }

}
