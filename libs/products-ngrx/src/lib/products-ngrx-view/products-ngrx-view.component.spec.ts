import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsNgrxViewComponent } from './products-ngrx-view.component';

describe('ProductsNgrxViewComponent', () => {
  let component: ProductsNgrxViewComponent;
  let fixture: ComponentFixture<ProductsNgrxViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductsNgrxViewComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductsNgrxViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
