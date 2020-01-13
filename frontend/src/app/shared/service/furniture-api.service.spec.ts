import { TestBed } from '@angular/core/testing';

import { FurnitureApiService } from './furniture-api.service';

describe('FurnitureApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FurnitureApiService = TestBed.get(FurnitureApiService);
    expect(service).toBeTruthy();
  });
});
