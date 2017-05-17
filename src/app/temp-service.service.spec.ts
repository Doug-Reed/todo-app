import { TestBed, inject } from '@angular/core/testing';

import { TempServiceService } from './temp-service.service';

describe('TempServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TempServiceService]
    });
  });

  it('should ...', inject([TempServiceService], (service: TempServiceService) => {
    expect(service).toBeTruthy();
  }));
});
