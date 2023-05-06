import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowAllBranchesComponent } from './show-all-branches.component';

describe('ShowAllBranchesComponent', () => {
  let component: ShowAllBranchesComponent;
  let fixture: ComponentFixture<ShowAllBranchesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowAllBranchesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowAllBranchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
