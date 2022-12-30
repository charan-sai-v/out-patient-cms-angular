import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AMainComponent } from './a-main.component';

describe('AMainComponent', () => {
  let component: AMainComponent;
  let fixture: ComponentFixture<AMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AMainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
