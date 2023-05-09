import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddClientToClassComponent } from './add-client-to-class.component';

describe('AddClientToClassComponent', () => {
  let component: AddClientToClassComponent;
  let fixture: ComponentFixture<AddClientToClassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddClientToClassComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddClientToClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
