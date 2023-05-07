import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpaManegementComponent } from './spa-manegement.component';

describe('SpaManegementComponent', () => {
  let component: SpaManegementComponent;
  let fixture: ComponentFixture<SpaManegementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpaManegementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpaManegementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
