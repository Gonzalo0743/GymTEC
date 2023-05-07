import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowSpaTreatmentComponent } from './show-spa-treatment.component';

describe('ShowSpaTreatmentComponent', () => {
  let component: ShowSpaTreatmentComponent;
  let fixture: ComponentFixture<ShowSpaTreatmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowSpaTreatmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowSpaTreatmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
