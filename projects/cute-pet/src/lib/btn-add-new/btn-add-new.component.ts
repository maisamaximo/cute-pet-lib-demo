import { ModalService } from './../services/modal.service';
import { Component } from '@angular/core';
import { PetFormComponent } from '../pet-form/pet-form.component';

@Component({
  selector: 'lib-pet-btn-add-new',
  templateUrl: './btn-add-new.component.html',
  styleUrls: [],
})
export class BtnAddNewComponent {
  constructor(private modalService: ModalService) {}

  addPet(): void {
    this.modalService.openModal(600, PetFormComponent);
  }
}
