import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalChartsComponent } from './modal-charts.component';

describe('ModalChartsComponent', () => {
  let component: ModalChartsComponent;
  let fixture: ComponentFixture<ModalChartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalChartsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
