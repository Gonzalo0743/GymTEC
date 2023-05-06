import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowAllInventoryComponent } from './show-all-inventory.component';

describe('ShowAllInventoryComponent', () => {
  let component: ShowAllInventoryComponent;
  let fixture: ComponentFixture<ShowAllInventoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowAllInventoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowAllInventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
