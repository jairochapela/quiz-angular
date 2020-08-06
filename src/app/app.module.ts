import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PreguntaComponent } from './pregunta/pregunta.component';
import { RespuestaComponent } from './respuesta/respuesta.component';

@NgModule({
  declarations: [
    AppComponent,
    PreguntaComponent,
    RespuestaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
