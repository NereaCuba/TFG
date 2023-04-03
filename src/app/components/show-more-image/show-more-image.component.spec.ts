import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowMoreImageComponent } from './show-more-image.component';

describe('ShowMoreImageComponent', () => {
  let component: ShowMoreImageComponent;
  let fixture: ComponentFixture<ShowMoreImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowMoreImageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowMoreImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
