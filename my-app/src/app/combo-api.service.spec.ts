import { TestBed } from '@angular/core/testing';

import { ComboAPIService } from './combo-api.service';

describe('ComboAPIService', () => {
  let service: ComboAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComboAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
