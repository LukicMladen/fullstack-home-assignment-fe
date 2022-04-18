import { TestBed } from '@angular/core/testing';

import { DefaultHttpInterceptor } from './default-http-interceptor';

describe('DefaultHttpInterceptor', () => {
  let service: DefaultHttpInterceptor;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DefaultHttpInterceptor);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
