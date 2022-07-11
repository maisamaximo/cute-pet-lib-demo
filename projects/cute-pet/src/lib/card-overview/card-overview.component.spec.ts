import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ModalService } from './../services/modal.service';
import { CardOverviewComponent } from './card-overview.component';

describe('CardOverviewComponent', () => {
  let component: CardOverviewComponent;
  let fixture: ComponentFixture<CardOverviewComponent>;

  beforeEach(() => {
    const modalServiceStub = () => ({
      openModal: (modalSize: number, petFormComponent: any, id: number) => ({}),
    });
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [CardOverviewComponent],
      providers: [{ provide: ModalService, useFactory: modalServiceStub }],
    });
    fixture = TestBed.createComponent(CardOverviewComponent);
    component = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });

  describe('onEdit', () => {
    it('makes expected calls', () => {
      const modalServiceStub: ModalService =
        fixture.debugElement.injector.get(ModalService);
      spyOn(modalServiceStub, 'openModal').and.callThrough();
      component.onEdit();
      expect(modalServiceStub.openModal).toHaveBeenCalled();
    });
  });

  describe('onDelete', () => {
    it('makes expected calls', () => {
      const modalServiceStub: ModalService =
        fixture.debugElement.injector.get(ModalService);
      spyOn(modalServiceStub, 'openModal').and.callThrough();
      component.onDelete();
      expect(modalServiceStub.openModal).toHaveBeenCalled();
    });
  });
});
