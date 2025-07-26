import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnStageComponent } from './on-stage.component';

describe('OnStageComponent', () => {
  let component: OnStageComponent;
  let fixture: ComponentFixture<OnStageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OnStageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnStageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
