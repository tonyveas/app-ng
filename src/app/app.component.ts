import { ImagenesService } from './services/imagenes.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  data: any;
  nombre = 'Mi nombre';
  estado = '';
  constructor(private imagenesService: ImagenesService) {
    //console.log('Componente creado');
  }

  title = 'app';
  ngOnInit(): void {
    //throw new Error('Method not implemented.');
    //console.log('COMP principal');
    /*this.imagenesService.getImagenes().subscribe((response: any) => {
      this.data = response;
      console.log(response);
    });*/
  }

  miEstado(estado: String) {
    this.estado = estado + '';
  }
}
