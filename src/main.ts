// Bootstrap-Datei für Angular-Anwendung, anstatt AppModule
// (Diese Datei ersetzt das traditionelle AppModule und ermöglicht die Verwendung von Standalone-Komponenten.)


import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { importProvidersFrom}  from '@angular/core';        // (statt HttpClientModule!)Importiert Module und Services, die in der Anwendung verwendet werden
import { provideHttpClient } from '@angular/common/http';    // Importiert / registriert intern HttpClient und die Standard‐Interceptor (z.B. HttpXhrBackend) für HTTP-Anfragen, ohne NgModule.
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';
import { routes } from './app/app-routing.module'; // noch anpassen

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),                 // Aktiviert HTTP-Client mit Interceptoren ohne Modul‐Import
    importProvidersFrom(BrowserModule),  // Importiert BrowserModule für grundlegende Angular-Funktionalität (alle Browser‐Services (Renderer, DOCUMENT, etc.))
    provideRouter(routes)                // eigene Routen für die Anwendung
  ]
}).catch((err) => console.error(err));
