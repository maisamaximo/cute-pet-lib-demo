import { CutePetModel } from './../models/cute-pet.model';
import { CutePetService } from './../services/cute-pet.service';
import { OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { UniqueIdService } from '../services/unique-id.service';
import * as i0 from "@angular/core";
export declare class PetFormComponent implements OnInit {
    dialogRef: MatDialogRef<PetFormComponent>;
    data: any;
    private fb;
    private cutePetService;
    private uniqueId;
    petForm: FormGroup;
    id: number;
    submitted: boolean;
    pet$: Observable<CutePetModel>;
    constructor(dialogRef: MatDialogRef<PetFormComponent>, data: any, fb: FormBuilder, cutePetService: CutePetService, uniqueId: UniqueIdService);
    ngOnInit(): void;
    onSubmit(): void;
    closeModal(): void;
    formatPayload(formData: any): any;
    updateForm(pet: any): any;
    static ɵfac: i0.ɵɵFactoryDef<PetFormComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<PetFormComponent, "lib-pet-form", never, { "id": "id"; }, {}, never, never>;
}
//# sourceMappingURL=pet-form.component.d.ts.map