import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router'; // RouterOutlet ist für die Navigation zwischen Routen erforderlich

@Component({
  selector: 'app-root',
  standalone: true, // macht Komponente unabhängig von NgModule  
  imports: [RouterModule],  // stellt <router-outlet> und routerLink bereit
  template: `<router-outlet></router-outlet>`,  // ersetzt das Default-HTML
})
export class AppComponent {}



