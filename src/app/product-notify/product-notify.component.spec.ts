import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductNotifyComponent } from './product-notify.component';

describe('ProductNotifyComponent', () => {
  let component: ProductNotifyComponent;
  let fixture: ComponentFixture<ProductNotifyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductNotifyComponent]
    });
    fixture = TestBed.createComponent(ProductNotifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
