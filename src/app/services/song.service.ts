// src/app/services/song.service.ts

import { Injectable } from '@angular/core';
import { Song } from '../models/song';

@Injectable({
  providedIn: 'root'
})
export class SongService {
  // Beispiel-Daten
  private songs: Song[] = [
    { id: 1, title: 'Imagine', artist: 'John Lennon' },
    { id: 2, title: 'Hey Jude', artist: 'The Beatles' },
    { id: 3, title: 'Let It Be', artist: 'The Beatles' },
  ];

  constructor() { }

  /** Alle Songs zurückgeben */
  getAll(): Song[] {
    return [...this.songs];
  }

  /** Einzelnen Song nach ID */
  getById(id: number): Song | undefined {
    return this.songs.find(song => song.id === id);
  }

  /** Neuen Song anlegen */
  add(song: Song): void {
    this.songs.push({ ...song, id: this.generateId() });
  }

  /** Song aktualisieren */
  update(updated: Song): void {
    const idx = this.songs.findIndex(s => s.id === updated.id);
    if (idx > -1) this.songs[idx] = { ...updated };
  }

  /** Song löschen */
  delete(id: number): void {
    this.songs = this.songs.filter(s => s.id !== id);
  }

  /** Neue ID generieren */
  private generateId(): number {
    return this.songs.length ? Math.max(...this.songs.map(s => s.id)) + 1 : 1;
  }
}
