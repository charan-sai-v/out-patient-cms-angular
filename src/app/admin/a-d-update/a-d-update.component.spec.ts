import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ADUpdateComponent } from './a-d-update.component';

describe('ADUpdateComponent', () => {
  let component: ADUpdateComponent;
  let fixture: ComponentFixture<ADUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ADUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ADUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
