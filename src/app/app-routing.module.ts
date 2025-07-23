import { Routes } from '@angular/router';
import { DashboardComponent  } from './dashboard/dashboard.component';
import { SongsComponent } from './songs/songs.component';
import { SongDetailComponent } from './songs/song-detail/song-detail.component';
import { OnStageComponent } from './on-stage/on-stage.component';
import { MessagesComponent } from './messages/messages.component';

export const routes: Routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' }, // Standardroute
    { path: '**', redirectTo: '/dashboard' }, // Fallback für ungültige Routen
    { path: 'dashboard', component: DashboardComponent },
    { path: 'songs', component: SongsComponent },
    {path: 'songs/:id', component: SongDetailComponent },
    {path: 'on-stage', component: OnStageComponent },
    {path: 'messages', component: MessagesComponent },
];
