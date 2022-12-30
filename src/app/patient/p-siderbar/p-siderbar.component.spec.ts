import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PSiderbarComponent } from './p-siderbar.component';

describe('PSiderbarComponent', () => {
  let component: PSiderbarComponent;
  let fixture: ComponentFixture<PSiderbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PSiderbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PSiderbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
