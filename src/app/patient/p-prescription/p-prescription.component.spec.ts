import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PPrescriptionComponent } from './p-prescription.component';

describe('PPrescriptionComponent', () => {
  let component: PPrescriptionComponent;
  let fixture: ComponentFixture<PPrescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PPrescriptionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PPrescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
