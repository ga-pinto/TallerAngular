import { HttpClientModule } from '@angular/common/http'; // Importa el HttpClientModule
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module'; // Asegúrate de que la configuración de rutas esté en este archivo

import { AppComponent } from './app.component';
import { SeriesModule } from './series/series.module'; // Importa el módulo de series

@NgModule({
  declarations: [
    AppComponent,
    // Otros componentes de la aplicación (si los hay)
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, // Añade el HttpClientModule aquí
    SeriesModule // Añade el módulo de series
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
