// src/app/messages/messages.component.ts

/* MessagesComponent ist für die Anzeige und Verwaltung von Nachrichten zuständig
Es nutzt den MessagesService, um Nachrichten zu empfangen und anzuzeigen
*/

import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { MessagesService } from '../../services/messages.service';

// Grundgerüst
@Component({
  selector: 'app-messages',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})


export class MessagesComponent implements OnInit {
  messages: string[] = []; // Array mit allen Nachrichten
  messageText: string = ''; // Text aus Eingabefeld

  constructor(private messagesService: MessagesService) { }

  ngOnInit(): void {
    this.messages = this.messagesService.getAll(); // Nachrichten beim Initialisieren laden
  }

  // Methode zum Hinzufügen einer neuen Nachricht
  addMessage(newMessage: string): void {
    const trimmedMessage = newMessage.trim();
    if (!trimmedMessage) return; // Leere Nachrichten und Leerzeichen ignorieren
    if (newMessage) {
      this.messagesService.add(trimmedMessage);
      this.messages = this.messagesService.getAll(); // Aktualisiert lokale Nachrichtenliste
    }
  }

  // Methode zum Löschen aller Nachrichten
  clearMessages(): void {
    this.messagesService.clear();
    this.messages = []; // Lokales Array leeren
  }

}
