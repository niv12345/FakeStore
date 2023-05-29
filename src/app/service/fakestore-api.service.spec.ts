import { TestBed } from '@angular/core/testing';

import { FakestoreAPIService } from './fakestore-api.service';

describe('FakestoreAPIService', () => {
  let service: FakestoreAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FakestoreAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
