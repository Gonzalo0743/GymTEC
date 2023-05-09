import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowPayrollComponent } from './show-payroll.component';

describe('ShowPayrollComponent', () => {
  let component: ShowPayrollComponent;
  let fixture: ComponentFixture<ShowPayrollComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowPayrollComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowPayrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
