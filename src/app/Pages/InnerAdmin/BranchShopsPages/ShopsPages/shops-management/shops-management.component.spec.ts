import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopsManagementComponent } from './shops-management.component';

describe('ShopsManagementComponent', () => {
  let component: ShopsManagementComponent;
  let fixture: ComponentFixture<ShopsManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopsManagementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShopsManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
