import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowAllPayrollComponent } from './show-all-payroll.component';

describe('ShowAllPayrollComponent', () => {
  let component: ShowAllPayrollComponent;
  let fixture: ComponentFixture<ShowAllPayrollComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowAllPayrollComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowAllPayrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
