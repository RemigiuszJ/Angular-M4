import { TestBed } from '@angular/core/testing';

import { ApiStartService } from './api-start.service';

describe('ApiStartService', () => {
  let service: ApiStartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiStartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
