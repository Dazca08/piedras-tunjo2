import { Component, OnInit } from '@angular/core';
import { Pictograma } from '../../../interfaces/pictograma.interface';
import { PictogramaService } from '../../../services/pictograma.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  pictogramas: Pictograma[] = [];

  constructor(
    private pictogramaService: PictogramaService
  ) { }

  ngOnInit(): void {
    this.obtenerPictogramas();
  }

  async obtenerPictogramas() {
    this.pictogramas = await this.pictogramaService.getPictogramas();
  }

  showConfirmAlert(id: number) {
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
        const deleted = await this.pictogramaService.eliminar(id);
        if (deleted) {
          this.pictogramas = this.pictogramas.filter(x => x.Id !== id);
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
