import { TestBed } from '@angular/core/testing';

import { NgxWeekDaySelectorService } from './ngx-week-day-selector.service';

describe('NgxWeekDaySelectorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxWeekDaySelectorService = TestBed.get(NgxWeekDaySelectorService);
    expect(service).toBeTruthy();
  });
});
