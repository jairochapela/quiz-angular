import { Component, OnInit, Input } from '@angular/core';

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
  
  constructor() { }

  ngOnInit() : void {
  }

}
