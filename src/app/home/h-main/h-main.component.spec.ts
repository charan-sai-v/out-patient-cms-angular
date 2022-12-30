import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HMainComponent } from './h-main.component';

describe('HMainComponent', () => {
  let component: HMainComponent;
  let fixture: ComponentFixture<HMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HMainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
