import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowGearComponent } from './show-gear.component';

describe('ShowGearComponent', () => {
  let component: ShowGearComponent;
  let fixture: ComponentFixture<ShowGearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowGearComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowGearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
