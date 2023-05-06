import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteGearComponent } from './delete-gear.component';

describe('DeleteGearComponent', () => {
  let component: DeleteGearComponent;
  let fixture: ComponentFixture<DeleteGearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteGearComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteGearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
