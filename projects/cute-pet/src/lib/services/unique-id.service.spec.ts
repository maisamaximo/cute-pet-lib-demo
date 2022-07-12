import { TestBed } from '@angular/core/testing';

import { UniqueIdService } from './unique-id.service';

describe(UniqueIdService.name, () => {
  let service: UniqueIdService;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [UniqueIdService] });
    service = TestBed.inject(UniqueIdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('generateRandomId', () => {
    it('should generate a random Id number when called', () => {
      const id = service.generateRandomId();
      expect(id).toEqual(jasmine.any(Number));
    });
  });

  describe('checkIdExists', () => {
    it('should check is an Id exist when called passing an Id and a list of existent Ids', () => {
      const id = service.checkIdExists([], 2);
      expect(id).toBeTrue();
    });
  });
});
