import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditShopsComponent } from './edit-shops.component';

describe('EditShopsComponent', () => {
  let component: EditShopsComponent;
  let fixture: ComponentFixture<EditShopsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditShopsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditShopsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
