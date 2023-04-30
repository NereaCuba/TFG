import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluateDetailComponent } from './evaluate-detail.component';

describe('EvaluateDetailComponent', () => {
  let component: EvaluateDetailComponent;
  let fixture: ComponentFixture<EvaluateDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EvaluateDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EvaluateDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
