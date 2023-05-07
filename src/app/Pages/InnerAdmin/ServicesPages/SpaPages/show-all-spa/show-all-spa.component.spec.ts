import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowAllSpaComponent } from './show-all-spa.component';

describe('ShowAllSpaComponent', () => {
  let component: ShowAllSpaComponent;
  let fixture: ComponentFixture<ShowAllSpaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowAllSpaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowAllSpaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
