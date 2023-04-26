import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamTypeManagementComponent } from './team-type-management.component';

describe('TeamTypeManagementComponent', () => {
  let component: TeamTypeManagementComponent;
  let fixture: ComponentFixture<TeamTypeManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamTypeManagementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeamTypeManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
