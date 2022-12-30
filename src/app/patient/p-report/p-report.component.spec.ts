import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PReportComponent } from './p-report.component';

describe('PReportComponent', () => {
  let component: PReportComponent;
  let fixture: ComponentFixture<PReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PReportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
