import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BranchesManagementPageComponent } from './branches-management-page.component';

describe('BranchesManagementPageComponent', () => {
  let component: BranchesManagementPageComponent;
  let fixture: ComponentFixture<BranchesManagementPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BranchesManagementPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BranchesManagementPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
