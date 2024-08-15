import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarBackgroundComponent } from './star-background.component';

describe('StarBackgroundComponent', () => {
  let component: StarBackgroundComponent;
  let fixture: ComponentFixture<StarBackgroundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StarBackgroundComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StarBackgroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
