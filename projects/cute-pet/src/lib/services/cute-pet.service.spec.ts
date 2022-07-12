import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { CutePetModel } from '../models/cute-pet.model';
import { CutePetService } from './cute-pet.service';

describe(CutePetService.name, () => {
  let service: CutePetService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CutePetService],
    });
    service = TestBed.inject(CutePetService);
  });

  it('can load instance', () => {
    expect(service).toBeTruthy();
  });

  describe('editPet', () => {
    it('should makes expected calls to edit a pet', () => {
      const httpTestingController = TestBed.inject(HttpTestingController);
      const cutePetModelStub: CutePetModel = <any> {};
      service.editPet(cutePetModelStub).subscribe((res) => {
        expect(res).toEqual(cutePetModelStub);
      });
      const req = httpTestingController.expectOne(
        'https://petstore3.swagger.io/api/v3/pet'
      );
      expect(req.request.method).toEqual('PUT');
      req.flush(cutePetModelStub);
      httpTestingController.verify();
    });
  });

  describe('createPet', () => {
    it('should makes expected calls to create a pet', () => {
      const httpTestingController = TestBed.inject(HttpTestingController);
      const cutePetModelStub: CutePetModel = <any> {};
      service.createPet(cutePetModelStub).subscribe((res) => {
        expect(res).toEqual(cutePetModelStub);
      });
      const req = httpTestingController.expectOne(
        'https://petstore3.swagger.io/api/v3/pet'
      );
      expect(req.request.method).toEqual('POST');
      req.flush(cutePetModelStub);
      httpTestingController.verify();
    });
  });
});
