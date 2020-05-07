import { Component, OnInit } from '@angular/core';
import { Cabana } from 'src/app/interfaces/cabana.interface';
import { CabanasService } from '../../../services/cabanas.service';
import Swal from 'sweetalert2';
import { ImagesService } from '../../../services/images.service';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  cabanas: Cabana[] = [];

  constructor(
    private cabanasService: CabanasService,
    private imagesService: ImagesService
  ) { }

  ngOnInit(): void {
    this.obtenerCabanas();
  }

  async obtenerCabanas() {
    this.cabanas = await this.cabanasService.getCabanas();
    // console.log(this.cabanas);
  }

  showConfirmAlert(cabana: Cabana) {
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
        const deleted = await this.cabanasService.eliminar(cabana.Id);
        if (deleted) {
          await this.imagesService.deleteImages(cabana.ImagenesUrl, 'cabana');
          this.cabanas = this.cabanas.filter(x => x.Id !== cabana.Id);
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
