# BandManager
Die Band-Manager-App ist eine moderne Angular-Webanwendung für Musiker und Bands, die die Organisation und Verwaltung von Songs und Setlists vereinfacht. Sie entstand während meiner zweijährigen Fachinformatikerin-Ausbildung. Das Backend wurde von Luca J. entwickelt und in Docker-Containern gehostet.

## Inhaltsverzeichnis
- [Projektidee](#projektidee)
- [Funktionen](#funktionen)
- [Geplante Features](#geplante-features)
- [Technologien](#technologien)
- [Architektur](#architektur)
- [Projektmanagement](#projektmanagement)
- [Status](#status)
- [Team](#team)
- [Screenshots](#screenshots)
- [Lizenz](#lizenz)

## Projektidee
Ziel des Projekts ist die Entwicklung einer Anwendung zur effizienten Organisation und Verwaltung eigener Songs und Setlists für Musikbands. Der Schwerpunkt liegt auf der _Musikbibliothek_ als zentralem Modul, das als Datenbank für bandeigene Songs dient. Darüber hinaus sollen Datenschutz, Datensicherheit, Usability und eine solide technische Basis gewährleistet sein.

**Zielgruppe:**
- Musiker und Bands

**Strategische Ziele:**
- Hohe Usability & Softwareergonomie
- Gute Testabdeckung
- Nachhaltige und erweiterbare Architektur
- Datenschutz & Datensicherheit (z. B. DSGVO-konform)

## Funktionen (umgesetzte Features)

### Musikbibliothek
- Speicherung von Song-Informationen (Titel, Texte, Akkorde, Noten, Audio-Demos)
- Anzeige aller Songs in übersichtlicher Liste
- Suche und Filterung von Songs (nach Titel, Künstler, Genre)
- CRUD-Funktionalität (Create, Read, Update, Delete) für Songs  
- Benutzerfreundliches Interface

## Geplante Features
Folgende Funktionen waren für die BandManager-App vorgesehen, wurden jedoch im Proof-of-Concept noch nicht umgesetzt:

- **Responsive Design**
  - Anpassung an verschiedene Bildschirmgrößen (Desktop, Tablet, Smartphone)
  - Mobile-First-Ansatz
  - Unterstützung von Touch-Gesten

- **Formular-Validierung**
  - Vollständige Validierung aller Formulareingaben im Frontend
  - Fehlermeldungen bei fehlenden Pflichtfeldern

- **Setlist-Erstellung**
  - Erstellung und Verwaltung von Setlists für Auftritte
  - Drag-and-Drop zur Sortierung der Songs
  - Wiederverwendung gespeicherter Setlists als Vorlage

- **Gruppenverwaltung**
  - Nutzergruppen erstellen, verwalten, löschen
  - Einladungslinks für Gruppenbeitritt

- **Nutzermanagement-Frontend**
  - Frontend-Login mit JWT-Integration
  - Benutzerkonten verwalten
  - Passwort-Reset und E-Mail-Verifizierung

- **Progressive Web App (PWA)**
  - Offline-Funktionalität
  - App-ähnliche Bedienung

- **Weitere Module (langfristig)**
  - Kalender- und Terminplanung
  - Chat-Modul für Bandmitglieder
  - Lautstärkeüberwachung per Sensoren

## Technologien
- [Angular](https://angular.io/) (Standalone Components)
- TypeScript
- SCSS
- Docker (für Backend und Datenbank)
- JWT-basierte Authentifizierung war geplant, wurde jedoch im Frontend aus Zeitgründen nicht umgesetzt.
- Datenbank: relational (MySQL)

## Architektur

### Frontend
- Entwicklung mit Angular
- Moderne UI-Komponenten
- Das Frontend enthält CRUD-Funktionen für Songs. Zunächst wurde ein Mock-Backend genutzt, bevor die App an die finale REST-API des Backends angebunden wurde.

### Backend
- Entwicklung von RESTful APIs für Songs (CRUD)
- Hosting in Docker-Containern
- Datenpersistenz in Container-Datenbanken
- Planung einer JWT-basierten Authentifizierung (nicht umgesetzt im Frontend)
- Verschlüsselung sensibler Daten
- Rollen- und Berechtigungssystem (geplant)

### Sicherheit & Datenschutz

- Zugriffsbeschränkungen für alle CRUD-Operationen (geplant)
- Datenverschlüsselung bei Speicherung und Übertragung
- DSGVO-Konformität
- Backup-Strategien für Daten

## Projektmanagement
Das Projekt wurde als eduScrum-Projekt konzipiert. Es wurden User Stories mit Akzeptanzkriterien für Frontend und Backend entwickelt.

### User Story 1: Song-Datenbank

> „Als Bandmitglied möchte ich alle Songs der Band in einer zentralen Datenbank speichern können, um schnellen Zugriff auf Texte, Akkorde und Noten zu haben.“

- Formulare zur Eingabe und Bearbeitung von Songinformationen
- CRUD-Funktionen für Songs
- Such- und Filterfunktionen

*(Formular-Validierung und Responsive Design waren geplant, aber nicht vollständig umgesetzt.)*

### User Story 3: Anmerkungen zu Songs

> „Als Bandmitglied möchte ich Anmerkungen und Notizen zu Songs hinterlassen können, um z. B. wichtige Hinweise für die Probe oder den Auftritt zu speichern.“

- Eingabefelder für Notizen zu Songs
- Anzeige der Anmerkungen in der Song-Detailansicht
- CRUD-Funktionalität für Notizen

*(Diese Funktion wurde aus Zeitgründen nicht umgesetzt.)*

## Status

**Proof-of-Concept**  
Einige Funktionen wurden entwickelt und getestet. Der Code wurde aus der Projektdokumentation rekonstruiert.
Ein einfaches Responsive Design für Desktop-Bildschirme ist vorhanden, jedoch bisher nicht für mobile Geräte umgesetzt.
Mobile Unterstützung, Touch-Gesten und Nutzermanagement sind aktuell nicht implementiert.


## Team

- **Andrea Küllmer** – Frontend-Entwicklung (Angular, UI/UX)
- **Luca J.** – Backend-Entwicklung (API, Datenbank, Docker)
- **S. G.** – Product Owner / Mentor

## Screenshots
  siehe Ordner '/screenshots'
  
## Lizenz
  Dieses Projekt steht unter der Creative Commons Attribution-NonCommercial 4.0 Lizenz. Keine kommerzielle Nutzung erlaubt.

---

# BandManager

**BandManager** is a modern Angular web application designed for musicians and bands to simplify the organization and management of songs and setlists. It was developed during my two-year apprenticeship as an IT specialist. The backend was implemented by Luca J. and is hosted in Docker containers.

## Table of Contents
- [Project Idea](#project-idea)
- [Features](#features)
- [Planned Features](#planned-features)
- [Technologies](#technologies)
- [Architecture](#architecture)
- [Project Management](#project-management)
- [Status](#status)
- [Team](#team)
- [Screenshots](#screenshots)
- [License](#license)

## Project Idea

The goal of this project is to develop an application for the efficient organization and management of a band's own songs and setlists. The focus lies on the **Music Library** as the central module, serving as a database for all of a band’s own songs. In addition, the application aims to ensure data protection, data security, usability, and a robust technical foundation.

**Target Audience:**
- Musicians and bands

**Strategic Goals:**
- High usability and software ergonomics
- Good test coverage
- Sustainable and scalable architecture
- Data protection and data security (e.g. GDPR compliance)

## Features (Implemented)

### Music Library
- Storage of song information (title, lyrics, chords, sheet music, audio demos)
- Display of all songs in a clear and organized list
- Search and filter functionality (by title, artist, genre)
- CRUD functionality (Create, Read, Update, Delete) for songs
- User-friendly interface

> The frontend includes CRUD functionality for songs. Initially, a mock backend was used to enable development independently of the backend. Later, the app was connected to the final REST API of the backend.

## Planned Features

The following features were planned for BandManager but have not yet been implemented in the proof of concept:

- **Responsive Design**
  - Adapting the layout to various screen sizes (desktop, tablet, smartphone)
  - Mobile-first approach
  - Support for touch gestures

- **Form Validation**
  - Comprehensive validation of all form inputs in the frontend
  - Error messages for missing required fields

- **Setlist Management**
  - Create and manage setlists for performances
  - Drag-and-drop functionality to sort songs
  - Reuse saved setlists as templates

- **Group Management**
  - Create, manage, and delete user groups
  - Invite users via invitation links

- **User Management Frontend**
  - Frontend login with JWT integration
  - Manage user accounts
  - Password reset and email verification

- **Progressive Web App (PWA)**
  - Offline functionality
  - App-like experience

- **Additional Modules (long-term)**
  - Calendar and event planning
  - Chat module for band members
  - Volume monitoring via sensors

## Technologies

- [Angular](https://angular.io/) (Standalone Components)
- TypeScript
- SCSS
- Docker (for backend and database)
- A JWT-based authentication was planned but not implemented in the frontend due to time constraints.
- Database: relational (MySQL)

## Architecture

### Frontend

- Developed with Angular
- Modern UI components
- The frontend includes CRUD operations for songs. Initially, a mock backend was used before connecting the app to the final REST API of the backend.

### Backend

- Development of RESTful APIs for songs (CRUD)
- Hosted in Docker containers
- Data persistence using containerized databases
- Planned JWT-based authentication (not implemented in the frontend)
- Encryption of sensitive data
- Role and permission management (planned)

### Security & Data Protection

- Planned access restrictions for all CRUD operations
- Encryption of data at rest and in transit
- GDPR compliance
- Backup strategies for stored data

## Project Management

The project was organized as an **eduScrum project**. User stories with acceptance criteria were created for both the frontend and backend.

## User Stories

### User Story 1: Song Database

> "As a band member, I want to store all the band's songs in a central database so that I have quick access to lyrics, chords, and sheet music."

- Forms for entering and editing song information
- CRUD functionality for songs
- Search and filter options

*(Form validation and responsive design were planned but not fully implemented.)*

### User Story 2: Song Annotations

> "As a band member, I want to add notes and comments to songs to save important information for rehearsals or performances."

- Input fields for adding notes to songs
- Display of annotations in the song detail view
- CRUD functionality for annotations

*(This feature was not implemented due to time constraints.)*

## Status

**Proof of Concept**  
Several features have been developed and tested. Part of the code was reconstructed from project documentation.  
A basic responsive design is implemented for desktop screens. Mobile support, touch gestures, and user management are currently not implemented.

## Team

- **Andrea Küllmer** – Frontend Development (Angular, UI/UX)
- **Luca J.** – Backend Development (API, database, Docker)
- **S. G.** – Product Owner / Mentor

## Screenshots

See the folder [`/screenshots`](./screenshots) for example views of the BandManager user interface.

## License

This project is licensed under the **Creative Commons Attribution-NonCommercial 4.0 License**.  
Commercial use is not permitted.

=======

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.1.4.
