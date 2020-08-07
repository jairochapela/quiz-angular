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
   * Contador de pregunta.
   */
  contador = 0;

  /**
   * Contador de aciertos.
   */
  aciertos = 0;

  /**
   * Indica que hemos llegado al final del juego. Si vale false, es que
   * estamos jugando; si es true, fin del juego.
   */
  finDeJuego = false;

  /**
   * Colores para los botones.
   */
  colores = ["red", "blue", "yellow", "green"];

  /**
   * Acción de marcar una respuesta. Si la opción marcada coincide con
   * la opción correcta de la pregunta actual, aparecerá un mensaje indicando
   * que se ha respondido correctamente.
   * @param opcion Opción marcada, de 0 a 3
   */
  marcarRespuesta(opcion) {
    if (opcion == this.preguntaActual.correcta) {
      this.aciertos++;
      alert("Correcto!")
    } else {
      alert("Has fallado.")
    }

    this.contador++;
    if (this.contador < this.preguntas.length) {
      this.preguntaActual = this.preguntas[this.contador];
    } else {
      alert("Fin del juego");
      this.finDeJuego = true;
    }
  }


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
