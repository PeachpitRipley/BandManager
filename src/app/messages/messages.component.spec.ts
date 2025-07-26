// C:\Angular-Projects\BandManager\src\app\messages\messages.component.spec.ts

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MessagesComponent } from './messages.component';

describe('MessagesComponent', () => {
  let component: MessagesComponent;
  let fixture: ComponentFixture<MessagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      // "standalone: true"-Components in imports definieren
      imports: [
        MessagesComponent,
        CommonModule, // CommonModule importieren, um ngIf und ngFor zu verwenden
        FormsModule], // FormsModule importieren, um ngModel zu verwenden
    }).compileComponents();

    fixture = TestBed.createComponent(MessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add and clear messages', () => {
    component.addMessage(' hello ');
    expect(component.messages).toContain('hello');
    component.clearMessages();
    expect(component.messages.length).toBe(0);
  });
});
