import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ADAddComponent } from './a-d-add.component';

describe('ADAddComponent', () => {
  let component: ADAddComponent;
  let fixture: ComponentFixture<ADAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ADAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ADAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
