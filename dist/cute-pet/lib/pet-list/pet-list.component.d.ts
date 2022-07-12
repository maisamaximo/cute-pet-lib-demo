import { CutePetService } from './../services/cute-pet.service';
import { OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { CutePetModel } from '../models/cute-pet.model';
import * as i0 from "@angular/core";
export declare class PetListComponent implements OnInit {
    cutePetService: CutePetService;
    petAvailable$: Observable<CutePetModel[]>;
    petPendent$: Observable<CutePetModel[]>;
    petSold$: Observable<CutePetModel[]>;
    error$: Subject<boolean>;
    constructor(cutePetService: CutePetService);
    ngOnInit(): void;
    getPets(): void;
    getPetsByStatus(status: string): Observable<CutePetModel[]>;
    onRefresh(): void;
    static ɵfac: i0.ɵɵFactoryDef<PetListComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<PetListComponent, "lib-pet-list", never, {}, {}, never, never>;
}
//# sourceMappingURL=pet-list.component.d.ts.map