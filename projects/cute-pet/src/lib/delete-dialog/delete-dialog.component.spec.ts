import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { CutePetService } from './../services/cute-pet.service';
import { DeleteDialogComponent } from './delete-dialog.component';
import {
  MatDialogModule,
  MAT_DIALOG_DATA,
  MatDialogRef,
} from '@angular/material/dialog';

describe('DeleteDialogComponent', () => {
  let component: DeleteDialogComponent;
  let fixture: ComponentFixture<DeleteDialogComponent>;

  beforeEach(() => {
    const cutePetServiceStub = () => ({
      deletePet: (id: number) => ({ subscribe: (f: any) => f({}) }),
    });
    const matDialogRefStub = () => ({});
    TestBed.configureTestingModule({
      imports: [MatDialogModule],
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [DeleteDialogComponent],
      providers: [
        { provide: CutePetService, useFactory: cutePetServiceStub },
        { provide: MatDialogRef, useFactory: matDialogRefStub },
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialogRef, useValue: {} },
      ],
    });
    fixture = TestBed.createComponent(DeleteDialogComponent);
    component = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });

  describe('deletePet', () => {
    it('makes expected calls', () => {
      const cutePetServiceStub: CutePetService =
        fixture.debugElement.injector.get(CutePetService);
      spyOn(cutePetServiceStub, 'deletePet').and.callThrough();
      component.deletePet();
      expect(cutePetServiceStub.deletePet).toHaveBeenCalled();
    });
  });
});
