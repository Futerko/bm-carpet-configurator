import { TestBed, inject } from '@angular/core/testing';

import { CarpetService } from './carpet.service';

describe('CarpetService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CarpetService]
    });
  });

  it('should be created', inject([CarpetService], (service: CarpetService) => {
    expect(service).toBeTruthy();
  }));
});
