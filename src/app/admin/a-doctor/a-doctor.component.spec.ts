import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ADoctorComponent } from './a-doctor.component';

describe('ADoctorComponent', () => {
  let component: ADoctorComponent;
  let fixture: ComponentFixture<ADoctorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ADoctorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ADoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
