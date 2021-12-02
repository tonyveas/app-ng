import { Component, OnInit } from '@angular/core';
import { TitularesService } from '../services/titulares.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css'],
})
export class PrincipalComponent implements OnInit {
  titulares: any;
  titulo = '';
  descripcion = '';
  edicion = false;
  id: any;

  constructor(private titularesService: TitularesService) {
    console.log('Componente creado');
  }

  ngOnInit(): void {
    console.log('COM iniciando');

    this.obtener_titulares();
  }

  obtener_titulares() {
    this.titularesService
      .getTitulares()
      .subscribe((response) => (this.titulares = response));
  }

  crear_titular() {
    this.titularesService
      .createTitular({
        titulo: this.titulo,
        descripcion: this.descripcion,
      })
      .subscribe((response) => this.obtener_titulares());
  }

  eliminar_titulares(id: any) {
    this.titularesService
      .deleteTitulares(id)
      .subscribe((response) => (this.titulares = response));
  }

  editar(id: any, titulo: any, descripcion: any) {
    this.edicion = true;
    this.id = id;
    this.titulo = titulo;
    this.descripcion = descripcion;
    console.log(
      'id: ' + id + ', titulo: ' + titulo + ', descripcion: ' + descripcion
    );
  }

  actualizar_titular() {
    this.titularesService
      .updateTitula({
        id: this.id,
        titulo: this.titulo,
        descripcion: this.descripcion,
      })
      .subscribe((response) => {
        this.obtener_titulares();
        this.edicion = false;
      });
  }
}
