import { ModalService } from './../services/modal.service';
import { Component, Input } from '@angular/core';
import { DeleteDialogComponent } from '../delete-dialog/delete-dialog.component';
import { PetFormComponent } from '../pet-form/pet-form.component';

@Component({
  selector: 'lib-pet-card-overview',
  templateUrl: './card-overview.component.html',
  styleUrls: ['./card-overview.component.css'],
})
export class CardOverviewComponent {
  @Input()
  public id!: number;
  @Input()
  name!: string;
  @Input()
  status!: string;
  @Input()
  image!: string;

  constructor(private modalService: ModalService) {}

  onEdit(): void {
    this.modalService.openModal(600, PetFormComponent, this.id);
  }

  onDelete(): void {
    this.modalService.openModal(400, DeleteDialogComponent, this.id);
  }
}
