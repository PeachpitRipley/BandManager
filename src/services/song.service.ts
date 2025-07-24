// src/app/services/song.service.ts
// nutzt RxJS-Formular-Pattern


/* Logik-Schicht für Songs:
    - kapselt alle Operationen (CRUD, Suche, Mock-Daten).
    - führt CRUD-Operationen mit dem Backend durch.
    - verwaltet die Daten und stellt sie den Komponenten zur Verfügung (Komponenten arbeiten nicht direkt mit HTTP-Requests / fragen nie direkt nach Daten, sondern immer über diesen Service.))
*/

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'; // RxJS für reaktive Programmierung
import { HttpClient } from '@angular/common/http';

import { Song } from '../app/songs/song';

@Injectable({
  providedIn: 'root'
})
export class SongService {
  private apiUrl =  'http://localhost:3000/songs'; // Temporäres Backend                           später(?) >>> 'api/songs'; // URL zum Backend-API-Endpunkt
  constructor(private http: HttpClient) { }   // Injektion des HttpClient für HTTP-Anfragen
  
  // HTTP-Requests für CRUD-Operationen  
  getSongs(): Observable<Song[]> {
    return this.http.get<Song[]>(this.apiUrl); // Holt alle Songs als Observable
  }

  addSong(song: Song): Observable<Song> {
    return this.http.post<Song>(this.apiUrl, song); // Fügt einen neuen Song hinzu
  }

  deleteSong(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`); // Löscht einen Song nach ID
  }

  updateSong(song: Song): Observable<Song> {
    return this.http.put<Song>(`${this.apiUrl}/${song.title}`, song); // Aktualisiert einen bestehenden Song
  }
}