import { Component, OnInit } from '@angular/core';
import { Pictograma } from '../../../interfaces/pictograma.interface';
import { PictogramaService } from '../../../services/pictograma.service';
import Swal from 'sweetalert2';
import { ImagesService } from '../../../services/images.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  pictogramas: Pictograma[] = [];

  constructor(
    private pictogramaService: PictogramaService,
    private imagesService: ImagesService
  ) { }

  ngOnInit(): void {
    this.obtenerPictogramas();
  }

  async obtenerPictogramas() {
    this.pictogramas = await this.pictogramaService.getPictogramas();
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
          await this.imagesService.deleteImage(pictograma.ImagenesUrl, 'picto');
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
