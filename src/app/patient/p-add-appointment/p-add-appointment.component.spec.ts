import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PAddAppointmentComponent } from './p-add-appointment.component';

describe('PAddAppointmentComponent', () => {
  let component: PAddAppointmentComponent;
  let fixture: ComponentFixture<PAddAppointmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PAddAppointmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PAddAppointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
