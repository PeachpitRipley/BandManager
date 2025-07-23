// src/services/messages.service.ts

// Grundgerüst leere Klasse für den Nachrichtenservice
/* Logik-Schicht für Nachrichten:
    Diese Klasse dient als Service, um Nachrichten zwischen Komponenten zu verwalten.
    Sie kapselt die Logik für das Senden und Empfangen von Nachrichten.
*/

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  private messages: string[] = [];  // speichert die Nachrichten

  getAll(): string[] {
    return [...this.messages];  // gibt eine Kopie der Nachrichten zurück statt Original-Referenz (getter)
  }

  add(message: string): void {
    this.messages.push(message);  // String, der neue Nachricht hinzufügt
  }

  clear(): void {
    this.messages = [];  // leert die Nachrichten
  } 
}
