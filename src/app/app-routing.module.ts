// Routes für die BandManager-App
import { Routes } from '@angular/router';

// Components, die in den Routen verwendet werden
import { DashboardComponent  } from './dashboard/dashboard.component';  // "Mischpult": Übersicht und Navigation, Top-5-Song-Cards
import { SongsComponent } from './songs/songs.component';   // "Plattenregal": Song-Verwaltung
import { SongDetailComponent } from './songs/song-detail/song-detail.component';    // "Tonstudio": Songs bearbeiten
import { OnStageComponent } from './on-stage/on-stage.component';   // "OnStage": Setlist und Auftritts-Planung
import { MessagesComponent } from './messages/messages.component';  

// Export des Routen-Arrays: Jede Route hat Pfad und zugehörige Component
export const routes: Routes = [
    { path: 'dashboard', component: DashboardComponent }, 
    { path: 'songs', component: SongsComponent },
    { path: 'songs/:id', component: SongDetailComponent },
    { path: 'on-stage', component: OnStageComponent },
    { path: 'messages', component: MessagesComponent },
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' }, // Standardroute
    { path: '**', redirectTo: '/dashboard' }, // Fallback für ungültige Routen
];
