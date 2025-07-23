import { TestBed } from '@angular/core/testing';
import { MessagesService } from './messages.service'; // Service muss importiert werden

describe('MessagesService', () => {
  let service: MessagesService;

  // Testmodul
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MessagesService);
  });

  it ('should start with no messages', () => {
    expect(service.getAll().length).toBe(0);
  });

  it ('should add and clear messages', () => {
    service.add('hello');
  expect(service.getAll()).toContain('hello');
  service.clear();
  expect(service.getAll().length).toBe(0);
});
})

/* => mit ng test prüfen, ob beide Tests grün sind
  Diese Tests prüfen, ob der Nachrichtenservice korrekt initialisiert wird
  und ob Nachrichten hinzugefügt und gelöscht werden können.
*/