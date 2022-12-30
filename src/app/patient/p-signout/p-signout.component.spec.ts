import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PSignoutComponent } from './p-signout.component';

describe('PSignoutComponent', () => {
  let component: PSignoutComponent;
  let fixture: ComponentFixture<PSignoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PSignoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PSignoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
