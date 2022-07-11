import { ModalService } from './../services/modal.service';
import * as i0 from "@angular/core";
export declare class CardOverviewComponent {
    private modalService;
    id: number;
    name: string;
    status: string;
    image: string;
    constructor(modalService: ModalService);
    onEdit(): void;
    onDelete(): void;
    static ɵfac: i0.ɵɵFactoryDef<CardOverviewComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<CardOverviewComponent, "lib-pet-card-overview", never, { "id": "id"; "name": "name"; "status": "status"; "image": "image"; }, {}, never, never>;
}
//# sourceMappingURL=card-overview.component.d.ts.map