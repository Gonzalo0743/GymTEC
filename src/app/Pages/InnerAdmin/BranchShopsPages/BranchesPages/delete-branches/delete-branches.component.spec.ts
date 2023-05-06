import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteBranchesComponent } from './delete-branches.component';

describe('DeleteBranchesComponent', () => {
  let component: DeleteBranchesComponent;
  let fixture: ComponentFixture<DeleteBranchesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteBranchesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteBranchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
