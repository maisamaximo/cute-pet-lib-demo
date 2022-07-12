import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ModalService } from './../services/modal.service';
import { BtnAddNewComponent } from './btn-add-new.component';

describe(BtnAddNewComponent.name, () => {
  let component: BtnAddNewComponent;
  let fixture: ComponentFixture<BtnAddNewComponent>;

  beforeEach(() => {
    const modalServiceStub = () => ({
      openModal: (modalSize: number, petFormComponent: any) => ({}),
    });
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [BtnAddNewComponent],
      providers: [{ provide: ModalService, useFactory: modalServiceStub }],
    });
    fixture = TestBed.createComponent(BtnAddNewComponent);
    component = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });

  describe('addPet', () => {
    it('should make expected calls to open the modal to add a new pet when clicking the button', () => {
      const modalServiceStub: ModalService =
        fixture.debugElement.injector.get(ModalService);
      spyOn(modalServiceStub, 'openModal').and.callThrough();
      component.addPet();
      expect(modalServiceStub.openModal).toHaveBeenCalled();
    });
  });
});
