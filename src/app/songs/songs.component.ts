// src/app/songs/songs.component.ts
// Plattenregal: Song-Verwaltung
// Herz der Benutzer-Interaktion: zentrale Oberfläche für die Verwaltung der Songs

/* HAUPTAUFGABEN
    - CRUD-Operationen: hinzufügen, anzeigen, bearbeiten, löschen
    - Filterung nach Titel und Künstler
    - Routing zu Detailansicht (optional)
    - Interaktion mit SongService für Datenzugriff (laden aus Backend, Änderungsn synchronisieren)
    - Datenbindung (ngModel) und Nutzer-Interaktion (Event-Listener: click, ngSubmit)
    - UI-Feedback: Snackbar

  */
// src/app/songs/songs.component.ts

import { Component, OnInit } from '@angular/core';  // Grundbausteine für jede Angular-Komponente
import { CommonModule } from '@angular/common';     // für *ngIf, *ngFor und andere Common-Direktiven
import { FormsModule } from '@angular/forms';       // für Formular, Two-Way-Data-Binding im Formular-Input (ngForm, ngModel)

import { Song } from './song'                       // Importiert das Datenmodell Song = "Form" des Song-Objekts
import { SongService } from '../../services/song.service';  // Datenverwaltung, liefert Song-Daten, HTTP-Aufrufe (CRUD-Operationen; Kommunikation mit Backend)

@Component({                              // Markiert eine Klasse als Angular-Komponente. Konfiguriert Struktur, Verhalten und  Darstellung einer Komponente.
  selector: 'app-songs',                  // Name/ Tag der Component im DOM bei manueller Verwendung in HTML
  standalone: true,                       // macht Komponente unabhängig von NgModule (keine Deklaration nötig)
  imports: [ CommonModule, FormsModule ], // Abhängigkeiten, die in dieser Komponente verwendet werden
  templateUrl: './songs.component.html',
  styleUrls: ['./songs.component.css']
})

// Klasse für die Songs-Komponente
export class SongsComponent implements OnInit {
  songs: Song[] = [];            // initial leere Liste von Songs, wird vom Service gefüllt
    currentSong: Song = {        // hält den aktuell ausgewählten Song für Bearbeitung
    id:      undefined,
    title:   '',
    artist:  '',
    album:   ''
  };

  constructor(private songService: SongService) { }   // Injiziert SongService

  ngOnInit(): void {              // Lifecycle-Hook, der nach der Konstruktion der Komponente aufgerufen wird. Stellt Code an bestimmten Stellen im LZ einer Komponente bereit.
       this.loadSongs();
  }

    // alle Songs vom Server holen
  loadSongs(): void {
    this.songService.getSongs()
      .subscribe(s => this.songs = s);
  }

  // neuen Song anlegen
  onSubmit(): void {
    this.songService.addSong(this.currentSong)
      .subscribe(newSong => {
        this.songs.push(newSong);
        this.resetForm();
      });
  }

  // vorhandenen Song aktualisieren
  updateSong(): void {
    if (!this.currentSong.id) return;     // Sicherstellen, dass ID existiert
    this.songService.updateSong(this.currentSong).subscribe(updatedSong => {
        const index = this.songs.findIndex(s => s.id === updatedSong.id);
        this.songs[index] = updatedSong;
        this.resetForm();
      });
  }

  // Song löschen
  deleteSong(): void {
  if (!this.currentSong.id) return; // Sicherstellen, dass ID existiert
  this.songService.deleteSong(this.currentSong.id).subscribe(() => {
    this.songs = this.songs.filter((s) => s.id !== this.currentSong.id);
    this.resetForm();
  });
}

  // akt.Song aus der Liste ins Formular laden
  selectSong(song: Song): void {
    this.currentSong = { ...song };
  }

  // Formular zurücksetzen
  resetForm(): void {
    this.currentSong = {
      id:      undefined,
      title:   '',
      artist:  '',
      album:   ''
    };
  }
}


  /*ngOnInit(): void {
    this.loadSongs(); // Lädt Songs beim Initialisieren der Komponente
  }

  // Lädt die Songs vom Service
  loadSongs(): void {
    this.songService.getSongs().subscribe(songs => {
      this.songs = songs; // Speichert die geladenen Songs im Array
    });
  }

  // Fügt einen neuen Song hinzu
  addSong(): void {
    if (this.newSong.id && this.newSong.artist) { // Überprüft, ob Titel und Künstler gesetzt sind
      this.songService.addSong(this.newSong).subscribe(song => {
        this.songs.push(song); // Fügt den neuen Song zum Array hinzu
        this.newSong = new Song(); // Setzt das Formular zurück
      });
    }
  }

  // Löscht einen Song
  deleteSong(song: Song): void {
    this.songService.deleteSong(song.id).subscribe(() => {
      this.songs = this.songs.filter(s => s.id !== song.id); // Entfernt den Song aus dem Array
    });
  }
*/
  
