// src/app/models/song.ts

export interface Song {
  /** Eindeutige ID */
  id: number;
  /** Titel des Songs */
  title: string;
  /** Name des Künstlers oder der Band */
  artist: string;
  /** Optional: Songtexte (Lyrics) */
  lyrics?: string;
  /** Optional: Akkorde oder Chord-Diagramme */
  chords?: string;
  /** Optional: Noten als URL oder im Textformat */
  sheetMusicUrl?: string;
}
