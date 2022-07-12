import { CutePetService } from './../services/cute-pet.service';
import { MatDialogRef } from '@angular/material/dialog';
import * as i0 from "@angular/core";
export declare class DeleteDialogComponent {
    dialogRef: MatDialogRef<DeleteDialogComponent>;
    data: any;
    private cutePetService;
    constructor(dialogRef: MatDialogRef<DeleteDialogComponent>, data: any, cutePetService: CutePetService);
    deletePet(): void;
    static ɵfac: i0.ɵɵFactoryDef<DeleteDialogComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<DeleteDialogComponent, "lib-pet-delete-dialog", never, {}, {}, never, never>;
}
//# sourceMappingURL=delete-dialog.component.d.ts.map