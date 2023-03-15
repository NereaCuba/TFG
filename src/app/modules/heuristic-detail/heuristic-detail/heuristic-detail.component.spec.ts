import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailHeuristicsComponent } from './detail-heuristics.component';

describe('HeuristicDetailComponent', () => {
  let component: DetailHeuristicsComponent;
  let fixture: ComponentFixture<DetailHeuristicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailHeuristicsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailHeuristicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
