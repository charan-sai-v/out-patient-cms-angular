import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DSidebarComponent } from './d-sidebar.component';

describe('DSidebarComponent', () => {
  let component: DSidebarComponent;
  let fixture: ComponentFixture<DSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DSidebarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
