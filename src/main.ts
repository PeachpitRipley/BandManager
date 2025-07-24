import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { importProvidersFrom } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';
import { routes } from './app/app-routing.module'; // noch anpassen

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(BrowserModule),    
    provideRouter(routes)   // Routen für die Anwendung bereitstellen
  ]
}).catch((err) => console.error(err));
