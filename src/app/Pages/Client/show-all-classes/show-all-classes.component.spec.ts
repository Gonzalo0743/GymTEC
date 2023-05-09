import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowAllClassesComponent } from './show-all-classes.component';

describe('ShowAllClassesComponent', () => {
  let component: ShowAllClassesComponent;
  let fixture: ComponentFixture<ShowAllClassesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowAllClassesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowAllClassesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
