// (Dashboard) Mischpult: Übersicht und Navigation, Top-5-Song-Cards

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true, // macht Komponente unabhängig von NgModule
  imports: [CommonModule, RouterModule],  // für *ngIf, *ngFor und routerLink
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

}
