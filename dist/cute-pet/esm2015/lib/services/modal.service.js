import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/dialog";
export class ModalService {
    constructor(dialog) {
        this.dialog = dialog;
    }
    openModal(modalSize, component, id) {
        const dialogRef = this.dialog.open(component, {
            minWidth: modalSize + 'px',
            data: { id },
        });
        dialogRef.afterClosed().subscribe();
    }
}
ModalService.ɵfac = function ModalService_Factory(t) { return new (t || ModalService)(i0.ɵɵinject(i1.MatDialog)); };
ModalService.ɵprov = i0.ɵɵdefineInjectable({ token: ModalService, factory: ModalService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ModalService, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: i1.MatDialog }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2N1dGUtcGV0L3NyYy9saWIvc2VydmljZXMvbW9kYWwuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7QUFNM0MsTUFBTSxPQUFPLFlBQVk7SUFDdkIsWUFBb0IsTUFBaUI7UUFBakIsV0FBTSxHQUFOLE1BQU0sQ0FBVztJQUFHLENBQUM7SUFFekMsU0FBUyxDQUFDLFNBQWlCLEVBQUUsU0FBYyxFQUFFLEVBQVc7UUFDdEQsTUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQzVDLFFBQVEsRUFBRSxTQUFTLEdBQUcsSUFBSTtZQUMxQixJQUFJLEVBQUUsRUFBRSxFQUFFLEVBQUU7U0FDYixDQUFDLENBQUM7UUFFSCxTQUFTLENBQUMsV0FBVyxFQUFFLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDdEMsQ0FBQzs7d0VBVlUsWUFBWTtvREFBWixZQUFZLFdBQVosWUFBWSxtQkFGWCxNQUFNO3VGQUVQLFlBQVk7Y0FIeEIsVUFBVTtlQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTWF0RGlhbG9nIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZGlhbG9nJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIE1vZGFsU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZGlhbG9nOiBNYXREaWFsb2cpIHt9XG5cbiAgb3Blbk1vZGFsKG1vZGFsU2l6ZTogbnVtYmVyLCBjb21wb25lbnQ6IGFueSwgaWQ/OiBudW1iZXIpOiB2b2lkIHtcbiAgICBjb25zdCBkaWFsb2dSZWYgPSB0aGlzLmRpYWxvZy5vcGVuKGNvbXBvbmVudCwge1xuICAgICAgbWluV2lkdGg6IG1vZGFsU2l6ZSArICdweCcsXG4gICAgICBkYXRhOiB7IGlkIH0sXG4gICAgfSk7XG5cbiAgICBkaWFsb2dSZWYuYWZ0ZXJDbG9zZWQoKS5zdWJzY3JpYmUoKTtcbiAgfVxufVxuIl19