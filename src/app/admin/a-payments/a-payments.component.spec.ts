import { ComponentFixture, TestBed } from '@angular/core/testing';

import { APaymentsComponent } from './a-payments.component';

describe('APaymentsComponent', () => {
  let component: APaymentsComponent;
  let fixture: ComponentFixture<APaymentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ APaymentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(APaymentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
