// Routes für die BandManager-App
import { Routes } from '@angular/router';

// Components, die in den Routen verwendet werden
import { DashboardComponent  } from './dashboard/dashboard.component';  // "Mischpult": Übersicht und Navigation, Top-5-Song-Cards
import { SongsComponent } from './songs/songs.component';               // "Plattenregal": Song-Verwaltung
import { SongDetailComponent } from './songs/song-detail/song-detail.component';    // "Tonstudio": Songs bearbeiten
import { OnStageComponent } from './on-stage/on-stage.component';       // "OnStage": Setlist und Auftritts-Planung
import { MessagesComponent } from './messages/messages.component';  

// Export des Routen-Arrays: Jede Route hat Pfad und zugehörige Component
export const routes: Routes = [
    // Routen mit Pfad und zugehöriger Komponente, Titel für Breadcrumbs 
    { path: 'dashboard', component: DashboardComponent, data : { title: 'Mischpult' } },
    { path: 'songs', component: SongsComponent, data: { title: 'Plattenregal' } },
    { path: 'songs/:id', component: SongDetailComponent, data: { title: 'Tonstudio' } },
    { path: 'on-stage', component: OnStageComponent, data: { title: 'OnStage' } },
    { path: 'messages', component: MessagesComponent, data: { title: 'Nachrichten' } },
        
    // Fallback-Routen
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' }, // Standardroute: leere Route leitet zu Dashboard weiter
    { path: '**', redirectTo: '/dashboard' },                  // ungültige Routen
];
