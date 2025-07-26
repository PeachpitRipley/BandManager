import { Component } from '@angular/core';            // = @Component-Dekorator
import { CommonModule } from '@angular/common';       // für ngIf, ngFor, etc.
import { RouterOutlet } from '@angular/router';       // für Routen-Templates

import { SidebarComponent } from './sidebar/sidebar.component';

@Component({
  selector: 'app-root',
  standalone: true,                   // macht Komponente unabhängig von NgModule  
  imports: [
    CommonModule,
    RouterOutlet,           
    SidebarComponent],      
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']                       
})
export class AppComponent {}