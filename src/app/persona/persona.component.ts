import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css'],
})
export class PersonaComponent implements OnInit {
  @Input() nombre!: String;
  @Output() estado = new EventEmitter<String>();

  temp = '';

  constructor() {}

  ngOnInit(): void {}

  enviar() {
    console.log('temp:' + this.temp);
    this.estado.emit(this.temp);
  }
}
