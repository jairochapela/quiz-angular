import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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
  ]
}
