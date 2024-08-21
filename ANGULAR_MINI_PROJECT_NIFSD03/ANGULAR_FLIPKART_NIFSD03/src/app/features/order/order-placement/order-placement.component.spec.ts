import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderPlacementComponent } from './order-placement.component';

describe('OrderPlacementComponent', () => {
  let component: OrderPlacementComponent;
  let fixture: ComponentFixture<OrderPlacementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrderPlacementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderPlacementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
