import { Component, Input } from '@angular/core';     // Input für Eingabe-Properties

@Component({
  standalone: true,
  selector: 'app-card',
  template: `
    <p>
      card works!
    </p>
    <div class="card">
      <ng-content></ng-content>
    </div>`,
  styles: [`
    .card {
      background: var(--color-card);
      border-radius: var(--space-s);
      padding: var(--space);
      box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    }
`]
})
export class CardComponent {
  @Input() header?: string;
}
