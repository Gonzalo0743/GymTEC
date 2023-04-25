import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminBranchPageComponent } from './admin-branch-page.component';

describe('AdminBranchPageComponent', () => {
  let component: AdminBranchPageComponent;
  let fixture: ComponentFixture<AdminBranchPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminBranchPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminBranchPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
