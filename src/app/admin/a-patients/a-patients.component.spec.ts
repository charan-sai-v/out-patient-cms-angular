import { ComponentFixture, TestBed } from '@angular/core/testing';

import { APatientsComponent } from './a-patients.component';

describe('APatientsComponent', () => {
  let component: APatientsComponent;
  let fixture: ComponentFixture<APatientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ APatientsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(APatientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
