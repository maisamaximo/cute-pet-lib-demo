import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  constructor(private dialog: MatDialog) {}

  openModal(modalSize: number, component: any, id?: number): void {
    const dialogRef = this.dialog.open(component, {
      minWidth: modalSize + 'px',
      data: { id },
    });

    dialogRef.afterClosed().subscribe();
  }
}
