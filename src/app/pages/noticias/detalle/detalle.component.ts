import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NoticiasService } from '../../../services/noticias.service';
import { Noticia } from 'src/app/interfaces/noticia.interface';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

  noticia: Noticia = undefined;

  constructor(
    private route: ActivatedRoute,
    private noticiaService: NoticiasService
  ) { }

  ngOnInit(): void {
    this.obtenerNoticia();
  }

  async obtenerNoticia() {
    const id = this.route.snapshot.paramMap.get('id');
    this.noticia = await this.noticiaService.getNoticia(Number(id));
  }

}
