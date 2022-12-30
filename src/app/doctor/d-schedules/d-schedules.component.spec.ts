import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DSchedulesComponent } from './d-schedules.component';

describe('DSchedulesComponent', () => {
  let component: DSchedulesComponent;
  let fixture: ComponentFixture<DSchedulesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DSchedulesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DSchedulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
