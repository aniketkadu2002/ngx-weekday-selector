import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxWeekDaySelectorComponent } from './ngx-week-day-selector.component';

describe('NgxWeekDaySelectorComponent', () => {
  let component: NgxWeekDaySelectorComponent;
  let fixture: ComponentFixture<NgxWeekDaySelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxWeekDaySelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxWeekDaySelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
