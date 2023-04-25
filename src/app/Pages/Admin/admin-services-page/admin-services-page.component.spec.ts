import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminServicesPageComponent } from './admin-services-page.component';

describe('AdminServicesPageComponent', () => {
  let component: AdminServicesPageComponent;
  let fixture: ComponentFixture<AdminServicesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminServicesPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminServicesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
