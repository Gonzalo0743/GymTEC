import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowAllGearComponent } from './show-all-gear.component';

describe('ShowAllGearComponent', () => {
  let component: ShowAllGearComponent;
  let fixture: ComponentFixture<ShowAllGearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowAllGearComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowAllGearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
