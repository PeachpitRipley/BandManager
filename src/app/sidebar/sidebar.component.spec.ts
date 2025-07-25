import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router'; // für RouterLink-Direktive

import { SidebarComponent } from './sidebar.component';

describe('SidebarComponent', () => {
  let component: SidebarComponent;
  let fixture: ComponentFixture<SidebarComponent>;        // simuliert Instanz und Umgebung der Komponente
  let compiled: HTMLElement;                              // Bezeichnung für das gerenderte DOM der Komponente

  beforeEach(async () => {
    console.log('SidebarComponent is', SidebarComponent);
    await TestBed.configureTestingModule({
      imports: [
        SidebarComponent
      ],
      providers: [
        provideRouter([])       // liefert einen Dummy-Router
      ],                       
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.nativeElement as HTMLElement;  // Zugriff auf das gerenderte DOM
  });

  it('should create the sidebar', () => {
    expect(component).toBeTruthy();
  });

  it('should render 4 navigation buttons', () => {
    const buttons = compiled.querySelectorAll('button');
    expect(buttons.length).toBe(4);
  });

  it('each button should have a routerLink', () => {
    const buttons = compiled.querySelectorAll('button[routerLink]');
    expect(buttons.length).toBe(4);
  });

  it('first button should link to /dashboard', () => {
    const first = compiled.querySelector('button');
    expect(first!.getAttribute('ng-reflect-router-link')).toBe('/dashboard');
  });
});
