import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GymsManagementPageComponent } from './gyms-management-page.component';

describe('GymsManagementPageComponent', () => {
  let component: GymsManagementPageComponent;
  let fixture: ComponentFixture<GymsManagementPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GymsManagementPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GymsManagementPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
