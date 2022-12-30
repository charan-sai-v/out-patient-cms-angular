import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PHelpComponent } from './p-help.component';

describe('PHelpComponent', () => {
  let component: PHelpComponent;
  let fixture: ComponentFixture<PHelpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PHelpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PHelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
