import { HttpClient } from '@angular/common/http';
import { CutePetModel } from '../models/cute-pet.model';
import { Observable } from 'rxjs';
import * as i0 from "@angular/core";
export declare class CutePetService {
    private http;
    private readonly apiURL;
    constructor(http: HttpClient);
    getPetsByStatus(status: string): Observable<CutePetModel[]>;
    getPetById(id: number): Observable<CutePetModel>;
    deletePet(id: number): Observable<any>;
    editPet(pet: CutePetModel): Observable<any>;
    createPet(pet: CutePetModel): Observable<CutePetModel>;
    static ɵfac: i0.ɵɵFactoryDef<CutePetService, never>;
    static ɵprov: i0.ɵɵInjectableDef<CutePetService>;
}
//# sourceMappingURL=cute-pet.service.d.ts.map