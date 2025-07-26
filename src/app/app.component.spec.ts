// src/app/app.component.spec.ts
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter }             from '@angular/router';
import { AppComponent }              from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        AppComponent,
        SidebarComponent
      ],
      providers: [
        provideRouter([])          // sorgt für Router + ActivatedRoute
      ]
    }).compileComponents();

    fixture  = TestBed.createComponent(AppComponent);
    compiled = fixture.nativeElement;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should render a router-outlet', () => {
    expect(compiled.querySelector('router-outlet')).toBeTruthy();
  });

  it('should render the sidebar component', () => {
    expect(compiled.querySelector('app-sidebar')).toBeTruthy();
  });
});



/* VORIGE VERSION
import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the 'temp-bm' title`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('temp-bm');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, temp-bm');
  });
});
*/