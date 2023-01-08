import { TestBed } from '@angular/core/testing';

import { AddformationService } from './addformation.service';

describe('AddformationService', () => {
  let service: AddformationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddformationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
