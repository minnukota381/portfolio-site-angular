import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticlesBackgroundComponent } from './particles-background.component';

describe('ParticlesBackgroundComponent', () => {
  let component: ParticlesBackgroundComponent;
  let fixture: ComponentFixture<ParticlesBackgroundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ParticlesBackgroundComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParticlesBackgroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
