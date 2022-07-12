import { TestBed } from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';
import { ModalService } from './modal.service';

describe(ModalService.name, () => {
  let service: ModalService;

  beforeEach(() => {
    const matDialogStub = () => ({
      open: (component: any, object: any) => ({
        afterClosed: () => ({ subscribe: (f: any) => f({}) }),
      }),
    });
    TestBed.configureTestingModule({
      providers: [
        ModalService,
        { provide: MatDialog, useFactory: matDialogStub },
      ],
    });
    service = TestBed.inject(ModalService);
  });

  it('can load instance', () => {
    expect(service).toBeTruthy();
  });
});
