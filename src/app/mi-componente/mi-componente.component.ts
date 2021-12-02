import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mi-componente',
  templateUrl: './mi-componente.component.html',
  styleUrls: ['./mi-componente.component.css'],
})
export class MiComponenteComponent implements OnInit {
  miP = 'Hola mundo!!';

  colores!: Array<{ id: Number; nombre: String }>;
  id = 1;

  visible = false;

  constructor() {
    this.colores = [
      { id: 1, nombre: 'color1' },
      { id: 2, nombre: 'color2' },
    ];
  }

  ngOnInit(): void {}

  cambiar_estado = () => {
    this.visible = !this.visible;
  };

  filtrar = () => {
    return this.colores.filter((item) => item.id == this.id);
  };
}
