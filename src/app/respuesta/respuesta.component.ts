import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-respuesta',
  templateUrl: './respuesta.component.html',
  styleUrls: ['./respuesta.component.css']
})
export class RespuestaComponent implements OnInit {

  @Input()
  texto : string = "";

  @Input()
  opcion : number;

  @Input()
  color : string;

  @Output()
  seleccion = new EventEmitter<number>();
  
  constructor() { }

  ngOnInit() : void {
  }

  
  seleccionar() {
    this.seleccion.emit(this.opcion);
  }
}
