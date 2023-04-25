import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEquipmentPageComponent } from './admin-equipment-page.component';

describe('AdminEquipmentPageComponent', () => {
  let component: AdminEquipmentPageComponent;
  let fixture: ComponentFixture<AdminEquipmentPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminEquipmentPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminEquipmentPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
