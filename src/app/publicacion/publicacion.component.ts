import { Component, OnInit } from '@angular/core';
import { PublicacionesService } from '../services/publicaciones.service';

@Component({
  selector: 'app-publicacion',
  templateUrl: './publicacion.component.html',
  styleUrls: ['./publicacion.component.css'],
})
export class PublicacionComponent implements OnInit {
  publicaciones: any;

  constructor(private publicacionesService: PublicacionesService) {
    //console.log('Componente creado');
  }

  ngOnInit(): void {
    //console.log('Componente iniciado');
    this.getPublicaciones();
    // this.publicacionesService.getPublicaciones().subscribe((response: any) => {
    //   console.log(response);
    //   this.publicaciones = response;
    // });
  }

  getPublicaciones() {
    this.publicacionesService.getPublicaciones().subscribe((response: any) => {
      console.log(response);
      this.publicaciones = response;
    });
  }

  crearPublicacion() {
    console.log('crearPublicacion');
    this.publicacionesService
      .createPublicacion({
        nombres_persona: 'Nombes Persona',
        imagen_publicacion:
          'https://i.pinimg.com/564x/4c/3d/97/4c3d973a9ea236d5d4928e44f3c82723.jpg',
        descripcion: 'descripcion',
        url_descarga: 'url_descarga',
      })
      .subscribe((data: any) => this.getPublicaciones());
  }

  actualizarPublicacion() {
    this.publicacionesService
      .updatePublicacion({
        id: 1,
        nombres_persona: 'Luana Pinto000000',
        // imagen_publicacion:
        //   'https://www.elpais.com.co/files/article_multimedia_main_gallery/uploads/2017/12/30/5a47edc7badaa.jpeg',
        imagen_publicacion:
          'https://www.elpais.com.co/files/article_multimedia_main_gallery/uploads/2017/12/30/5a47edd42dea9.jpeg',
        descripcion: 'descripcion',
        url_descarga: 'url_descarga',
      })
      .subscribe((data: any) => {
        console.log(data);
        //this.publicaciones = data;
        this.getPublicaciones();
      });
  }

  eliminarPublicacion() {
    this.publicacionesService.deletePublicacion(20).subscribe((data: any) => {
      console.log(data);
      this.publicaciones = data;
    });
  }
}
