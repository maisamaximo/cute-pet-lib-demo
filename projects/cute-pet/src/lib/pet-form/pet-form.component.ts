import { CutePetModel } from './../models/cute-pet.model';
import { CutePetService } from './../services/cute-pet.service';
import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { UniqueIdService } from '../services/unique-id.service';

@Component({
  selector: 'lib-pet-form',
  templateUrl: './pet-form.component.html',
  styleUrls: ['./pet-form.component.css'],
})
export class PetFormComponent implements OnInit {
  public petForm!: FormGroup;
  @Input()
  id!: number;
  submitted = false;
  pet$!: Observable<CutePetModel>;

  constructor(
    public dialogRef: MatDialogRef<PetFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
    private cutePetService: CutePetService,
    private uniqueId: UniqueIdService
  ) {}

  ngOnInit(): void {
    if (this.data?.id) {
      this.cutePetService.getPetById(this.data.id).subscribe((pet) => {
        this.updateForm(pet);
      });
    }

    this.petForm = this.fb.group({
      id: null,
      category: this.fb.group({ id: 1, name: 'Dogs' }),
      name: [null, [Validators.required]],
      photoUrls: [[], [Validators.required]],
      tag: this.fb.group({ id: 1, name: '' }),
      status: [null, [Validators.required]],
    });
  }

  onSubmit(): void {
    this.submitted = true;
    if (this.petForm.valid) {
      if (this.petForm.value.id) {
        this.cutePetService
          .editPet(this.updateForm(this.petForm.value))
          .subscribe(
            (success) => {
              window.location.reload();
            },
            (error) => console.error(error),
            () => console.log('complete')
          );
      } else {
        this.cutePetService
          .createPet(this.formatPayload(this.petForm.value))
          .subscribe(
            (success) => {
              window.location.reload();
            },
            (error) => console.error(error),
            () => console.log('complete')
          );
      }
      this.dialogRef.close(true);
      this.petForm.reset();
    }
  }

  closeModal(): void {
    this.submitted = false;
    this.dialogRef.close(true);
    this.petForm.reset();
  }

  formatPayload(formData: any): any {
    const payload = {
      ...formData,
      id: this.uniqueId.generateRandomId(),
      photoUrls: [formData.photoUrls],
    };

    return payload;
  }

  updateForm(pet: any): any {
    const photoURL =
      pet.photoUrls instanceof Array ? pet.photoUrls[0] : [pet.photoUrls];

    this.petForm.patchValue({
      id: pet.id,
      name: pet.name,
      photoUrls: photoURL,
      status: pet.status,
    });
    return this.petForm.value;
  }
}
