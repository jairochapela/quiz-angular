import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  /**
   * Esta variable contendrá la pregunta que se estará mostrando en
   * pantalla.
   */
  preguntaActual = undefined;

  /**
   * Colores para los botones.
   */
  colores = ["red", "blue", "yellow", "green"];

  /**
   * En el momento de cargar el componente, se elegirá una pregunta a
   * mostrar de entre todas las disponibles en preguntas.
   */
  ngOnInit(): void {
    this.preguntaActual = this.preguntas[0];
  }

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
    {
      pregunta: "¿En qué año se celebraron los JJ.OO. de Tokio 2020?",
      respuestas: [
        "2020",
        "2021",
        "Antes que los JJ.OO. de Madrid",
        "Después de los JJ.OO. de Madrid"
      ],
      correcta: 1
    }
    // más preguntas aquí
  ];


}
