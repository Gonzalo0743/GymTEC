import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpaTreatmentManagementPageComponent } from './spa-treatment-management-page.component';

describe('SpaTreatmentManagementPageComponent', () => {
  let component: SpaTreatmentManagementPageComponent;
  let fixture: ComponentFixture<SpaTreatmentManagementPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpaTreatmentManagementPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpaTreatmentManagementPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
