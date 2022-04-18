import { TestBed } from '@angular/core/testing';

import { BusinessEntryService } from './business-entry.service';

describe('BusinessEntryService', () => {
  let service: BusinessEntryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BusinessEntryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
