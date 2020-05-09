import { Component, OnInit } from '@angular/core';
import { NoticiasService } from '../../../services/noticias.service';
import { Noticia } from 'src/app/interfaces/noticia.interface';
import Swal from 'sweetalert2';
import { ImagesService } from '../../../services/images.service';

declare var $: any;

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  noticias: Noticia[] = [];
  filterNoticia ='';
  constructor(
    private noticiasService: NoticiasService,
    private imagesService: ImagesService
  ) { }

  ngOnInit(): void {
    this.obtenerNoticias();
  }

  async obtenerNoticias() {
    this.noticias = await this.noticiasService.getNoticias();
    // igualar height de las cards de noticias
    setTimeout(() => {
      const cards = $('.card-noticia');
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

  showConfirmAlert(noticia: Noticia) {
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
        const deleted = await this.noticiasService.eliminarNoticia(noticia.id);
        if (deleted) {
          await this.imagesService.deleteImages(noticia.imagenesUrl, 'noticia');
          this.noticias = this.noticias.filter(x => x.id !== noticia.id);
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
