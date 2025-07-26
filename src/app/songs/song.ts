// \src\app\songs\song.ts
/* Datemodell = Datenquelle */

export interface Song {
  
  id?: number;      /** optional, wird bei der Bearbeitung automatisch generiert */ 
  title: string;   
  artist: string;
  album: string;
  lyrics?: string;
  chords?: string;
  sheetMusicUrl?: string;
  clicks?: number; 
}
