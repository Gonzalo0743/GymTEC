import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowAllJobComponent } from './show-all-job.component';

describe('ShowAllJobComponent', () => {
  let component: ShowAllJobComponent;
  let fixture: ComponentFixture<ShowAllJobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowAllJobComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowAllJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
