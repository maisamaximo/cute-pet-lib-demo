import { CutePetService } from './../services/cute-pet.service';
import { Component, Inject, Input } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'lib-pet-delete-dialog',
  templateUrl: './delete-dialog.component.html',
  styleUrls: ['./delete-dialog.component.css'],
})
export class DeleteDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<DeleteDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private cutePetService: CutePetService
  ) {}

  deletePet(): void {
    this.cutePetService.deletePet(this.data.id).subscribe(
      (success) => {
        console.log('success');
      },
      (error) => {
        window.location.reload();
        console.error(error);
      },
      () => {
        window.location.reload();
      }
    );
  }
}
