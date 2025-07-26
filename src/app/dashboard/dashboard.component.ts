// (Dashboard) Mischpult: Übersicht und Navigation, Top-5-Song-Cards

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { Song } from '../songs/song'; // Import des Song-Modells
import { CardComponent } from '../ui/card/card.component';

@Component({
  selector: 'app-dashboard',
  standalone: true, // macht Komponente unabhängig von NgModule
  imports: [CommonModule, RouterModule, CardComponent],  // für *ngIf, *ngFor und routerLink
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  // Beispiel-Daten für Anzeige Top 5 Songs im Dashboard
  top5: Song[] = [
    { id: 1, title: 'Die da?',            artist: 'Fanta 4', album: 'Himmel',      clicks: 60 },
    { id: 2, title: 'Das höchste Gut …',  artist: 'Cicero',   album: 'eins',        clicks: 30 },
    { id: 3, title: 'Junger Wandersmann', artist: 'Artist C', album: 'eins',        clicks: 12    },
    { id: 4, title: 'MfG 2',              artist: 'Howard Carpendale', album: 'Weihnachtslieder', clicks: 12 },
    { id: 5, title: 'Jetzt geht’s ab!',   artist: 'Fanta 4', album: 'Himmel',      clicks: 6     }
  ];

  constructor() {
    // Hier könnte Logik für das Dashboard stehen, z.B. Daten laden
  }
}
