import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientClassRegisterPageComponent } from './client-class-register-page.component';

describe('ClientClassRegisterPageComponent', () => {
  let component: ClientClassRegisterPageComponent;
  let fixture: ComponentFixture<ClientClassRegisterPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientClassRegisterPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientClassRegisterPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
