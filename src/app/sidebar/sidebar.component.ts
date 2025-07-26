// Sidebar-Menü für Komponenten-Navigation

import { Component } from '@angular/core';      // für @Component-Dekorator
import { RouterLink } from '@angular/router';   // Directive für <a routerLink="…">

@Component({
  standalone: true,                   // kein NgModule erforderlich
  selector: 'app-sidebar',            // Einbindung mit <app-sidebar></app-sidebar>
  imports: [RouterLink],              // macht routerLink-Directive verfügbar
 templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
// leere Export-Klasse
export class SidebarComponent {}