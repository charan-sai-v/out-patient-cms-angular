import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PDoctorProfileComponent } from './p-doctor-profile.component';

describe('PDoctorProfileComponent', () => {
  let component: PDoctorProfileComponent;
  let fixture: ComponentFixture<PDoctorProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PDoctorProfileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PDoctorProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
