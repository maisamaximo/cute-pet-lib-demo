import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { CutePetService } from './../services/cute-pet.service';
import { PetListComponent } from './pet-list.component';

describe(PetListComponent.name, () => {
  let component: PetListComponent;
  let fixture: ComponentFixture<PetListComponent>;

  beforeEach(() => {
    const cutePetServiceStub = () => ({
      getPetsByStatus: (status: string) => ({ pipe: () => ({}) }),
    });
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [PetListComponent],
      providers: [{ provide: CutePetService, useFactory: cutePetServiceStub }],
    });
    fixture = TestBed.createComponent(PetListComponent);
    component = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnInit', () => {
    it('should make expected calls when initialize the component', () => {
      spyOn(component, 'onRefresh').and.callThrough();
      component.ngOnInit();
      expect(component.onRefresh).toHaveBeenCalled();
    });
  });

  describe('getPets', () => {
    it('should makes expected calls to bring all the pets', () => {
      spyOn(component, 'getPetsByStatus').and.callThrough();
      component.getPets();
      expect(component.getPetsByStatus).toHaveBeenCalled();
    });
  });

  describe('onRefresh', () => {
    it('should makes expected calls to refresh de page', () => {
      spyOn(component, 'getPets').and.callThrough();
      component.onRefresh();
      expect(component.getPets).toHaveBeenCalled();
    });
  });
});
