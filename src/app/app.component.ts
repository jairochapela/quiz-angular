import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'quiz';

  preguntas = [
    {
      pregunta: "¿De qué color es el caballo blanco de Santiago?",
      respuestas: [
        "Blanco",
        "Verde",
        "Azul",
        "Isabelino"
      ],
      correcta: 3
    },
    // más preguntas aquí
  ];

  preguntaActual = undefined;

  ngOnInit(): void {
    this.preguntaActual = this.preguntas[0];
  }
}
