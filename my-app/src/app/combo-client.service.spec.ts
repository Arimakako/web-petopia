import { TestBed } from '@angular/core/testing';

import { ComboClientService } from './combo-client.service';

describe('ComboClientService', () => {
  let service: ComboClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComboClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
