import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeuristicsComponent } from './heuristics.component';

describe('HeuristicsComponent', () => {
  let component: HeuristicsComponent;
  let fixture: ComponentFixture<HeuristicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeuristicsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeuristicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
