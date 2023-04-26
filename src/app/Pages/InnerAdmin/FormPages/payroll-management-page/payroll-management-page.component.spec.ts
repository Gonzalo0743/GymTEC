import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayrollManagementPageComponent } from './payroll-management-page.component';

describe('PayrollManagementPageComponent', () => {
  let component: PayrollManagementPageComponent;
  let fixture: ComponentFixture<PayrollManagementPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PayrollManagementPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PayrollManagementPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
