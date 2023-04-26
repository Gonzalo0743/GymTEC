import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeManagementPageComponent } from './employee-management-page.component';

describe('EmployeeManagementPageComponent', () => {
  let component: EmployeeManagementPageComponent;
  let fixture: ComponentFixture<EmployeeManagementPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeManagementPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeManagementPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
