import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesManagementPageComponent } from './services-management-page.component';

describe('ServicesManagementPageComponent', () => {
  let component: ServicesManagementPageComponent;
  let fixture: ComponentFixture<ServicesManagementPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicesManagementPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicesManagementPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
