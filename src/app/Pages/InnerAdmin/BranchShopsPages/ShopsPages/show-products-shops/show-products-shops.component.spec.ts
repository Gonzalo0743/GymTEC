import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowProductsShopsComponent } from './show-products-shops.component';

describe('ShowProductsShopsComponent', () => {
  let component: ShowProductsShopsComponent;
  let fixture: ComponentFixture<ShowProductsShopsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowProductsShopsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowProductsShopsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
