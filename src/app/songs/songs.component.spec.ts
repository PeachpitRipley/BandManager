import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { provideRouter  } from '@angular/router';
import { provideHttpClient, HttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

import { SongsComponent } from './songs.component';
import { SongService } from '../../services/song.service';

describe('SongsComponent', () => {
  let component: SongsComponent;
  let fixture: ComponentFixture<SongsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SongsComponent, FormsModule],      // imports[], nicht declarations[], da Standalone-Komponente
                                                   // Standalone-Komponente, daher keine Deklaration nötig
      providers: [
        provideHttpClient(),                       // versorgt HttpClient mit dem echten HTTP-Provider
        provideHttpClientTesting(),                // HTTP-Client für Tests bereitstellen (Mock-HTTP-Client, um echte HTTP-Anfragen zu vermeiden)
        SongService,                               // SongService für Tests bereitstellen 
        provideRouter([]),                         // Router für Tests bereitstellen, routerLink
      ]                                           
    })
    .compileComponents();

    fixture = TestBed.createComponent(SongsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it ('should load songs (mock) on init', () => {
    expect(Array.isArray(component.songs)).toBeTrue();    // Überprüft, ob songs ein Array ist
    //expect(component.songs.length).toBeGreaterThan(0);    // Überprüft, ob Songs geladen wurden >>> nach Backend-Integration freischalten!!!
  });
})
