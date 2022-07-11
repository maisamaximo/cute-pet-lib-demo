import { Component } from '@angular/core';
import { EMPTY, Subject } from 'rxjs';
import { catchError } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "./../services/cute-pet.service";
import * as i2 from "@angular/common";
import * as i3 from "@angular/material/tabs";
import * as i4 from "../card-overview/card-overview.component";
import * as i5 from "@angular/material/icon";
import * as i6 from "@angular/material/button";
import * as i7 from "@angular/material/progress-spinner";
function PetListComponent_mat_tab_group_1_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "lib-pet-card-overview", 8);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const pet_r7 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("id", pet_r7.id)("name", pet_r7.name)("status", pet_r7.status)("image", pet_r7.photoUrls[0]);
} }
function PetListComponent_mat_tab_group_1_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "lib-pet-card-overview", 8);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const pet_r8 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("id", pet_r8.id)("name", pet_r8.name)("status", pet_r8.status)("image", pet_r8.photoUrls[0]);
} }
function PetListComponent_mat_tab_group_1_ng_container_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "lib-pet-card-overview", 8);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const pet_r9 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("id", pet_r9.id)("name", pet_r9.name)("status", pet_r9.status)("image", pet_r9.photoUrls[0]);
} }
function PetListComponent_mat_tab_group_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-tab-group");
    i0.ɵɵelementStart(1, "mat-tab", 3);
    i0.ɵɵelementStart(2, "div", 4);
    i0.ɵɵtemplate(3, PetListComponent_mat_tab_group_1_ng_container_3_Template, 2, 4, "ng-container", 5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "mat-tab", 6);
    i0.ɵɵelementStart(5, "div", 4);
    i0.ɵɵtemplate(6, PetListComponent_mat_tab_group_1_ng_container_6_Template, 2, 4, "ng-container", 5);
    i0.ɵɵpipe(7, "async");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "mat-tab", 7);
    i0.ɵɵelementStart(9, "div", 4);
    i0.ɵɵtemplate(10, PetListComponent_mat_tab_group_1_ng_container_10_Template, 2, 4, "ng-container", 5);
    i0.ɵɵpipe(11, "async");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const petAvailable_r3 = ctx.ngIf;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngForOf", petAvailable_r3);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(7, 3, ctx_r0.petPendent$));
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(11, 5, ctx_r0.petSold$));
} }
function PetListComponent_ng_template_3_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r14 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 11);
    i0.ɵɵelementStart(1, "mat-icon", 12);
    i0.ɵɵtext(2, " error ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "span", 13);
    i0.ɵɵtext(4, "Error loading data. Try again later");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "button", 14);
    i0.ɵɵlistener("click", function PetListComponent_ng_template_3_div_0_Template_button_click_5_listener() { i0.ɵɵrestoreView(_r14); const ctx_r13 = i0.ɵɵnextContext(2); return ctx_r13.onRefresh(); });
    i0.ɵɵtext(6, " Refresh ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} }
function PetListComponent_ng_template_3_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "mat-spinner", 15);
    i0.ɵɵelementStart(1, "p", 16);
    i0.ɵɵtext(2, "Loading data...");
    i0.ɵɵelementEnd();
} }
function PetListComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, PetListComponent_ng_template_3_div_0_Template, 7, 0, "div", 9);
    i0.ɵɵpipe(1, "async");
    i0.ɵɵtemplate(2, PetListComponent_ng_template_3_ng_template_2_Template, 3, 0, "ng-template", null, 10, i0.ɵɵtemplateRefExtractor);
} if (rf & 2) {
    const _r11 = i0.ɵɵreference(3);
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngIf", i0.ɵɵpipeBind1(1, 2, ctx_r2.error$))("ngIfElse", _r11);
} }
export class PetListComponent {
    constructor(cutePetService) {
        this.cutePetService = cutePetService;
        this.error$ = new Subject();
    }
    ngOnInit() {
        this.onRefresh();
    }
    getPets() {
        this.petAvailable$ = this.cutePetService.getPetsByStatus('available').pipe(catchError((error) => {
            console.error(error);
            this.error$.next(true);
            return EMPTY;
        }));
        this.petPendent$ = this.cutePetService.getPetsByStatus('pending').pipe(catchError((error) => {
            console.error(error);
            this.error$.next(true);
            return EMPTY;
        }));
        this.petSold$ = this.cutePetService.getPetsByStatus('sold').pipe(catchError((error) => {
            console.error(error);
            this.error$.next(true);
            return EMPTY;
        }));
    }
    onRefresh() {
        this.getPets();
    }
}
PetListComponent.ɵfac = function PetListComponent_Factory(t) { return new (t || PetListComponent)(i0.ɵɵdirectiveInject(i1.CutePetService)); };
PetListComponent.ɵcmp = i0.ɵɵdefineComponent({ type: PetListComponent, selectors: [["lib-pet-list"]], decls: 5, vars: 4, consts: [[1, "container"], [4, "ngIf", "ngIfElse"], ["loadingError", ""], ["label", "Available"], [1, "list"], [4, "ngFor", "ngForOf"], ["label", "Pending"], ["label", "Sold"], [3, "id", "name", "status", "image"], ["class", "loadingError", 4, "ngIf", "ngIfElse"], ["loading", ""], [1, "loadingError"], ["color", "primary", "aria-hidden", "false", "aria-label", "Example home icon", 1, "m-auto"], [1, "pb-2", "m-auto"], ["mat-flat-button", "", "color", "primary", 3, "click"], [1, "m-auto"], [1, "pt-2", "text-center"]], template: function PetListComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵtemplate(1, PetListComponent_mat_tab_group_1_Template, 12, 7, "mat-tab-group", 1);
        i0.ɵɵpipe(2, "async");
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(3, PetListComponent_ng_template_3_Template, 4, 4, "ng-template", null, 2, i0.ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        const _r1 = i0.ɵɵreference(4);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", i0.ɵɵpipeBind1(2, 2, ctx.petAvailable$))("ngIfElse", _r1);
    } }, directives: [i2.NgIf, i3.MatTabGroup, i3.MatTab, i2.NgForOf, i4.CardOverviewComponent, i5.MatIcon, i6.MatButton, i7.MatSpinner], pipes: [i2.AsyncPipe], styles: [".container[_ngcontent-%COMP%]{padding:5em}.list[_ngcontent-%COMP%]{display:flex;flex-direction:row;flex-wrap:wrap;gap:2rem;padding-block:4rem}.list[_ngcontent-%COMP%], .loadingError[_ngcontent-%COMP%]{justify-content:center}.loadingError[_ngcontent-%COMP%]{display:grid;align-items:center}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PetListComponent, [{
        type: Component,
        args: [{
                selector: 'lib-pet-list',
                templateUrl: './pet-list.component.html',
                styleUrls: ['./pet-list.component.css'],
            }]
    }], function () { return [{ type: i1.CutePetService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGV0LWxpc3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY3V0ZS1wZXQvc3JjL2xpYi9wZXQtbGlzdC9wZXQtbGlzdC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jdXRlLXBldC9zcmMvbGliL3BldC1saXN0L3BldC1saXN0LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDbEQsT0FBTyxFQUFFLEtBQUssRUFBYyxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDbEQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7Ozs7Ozs7O0lDR3BDLDZCQUErQztJQUM3QywyQ0FLeUI7SUFDM0IsMEJBQWU7OztJQUxYLGVBQWE7SUFBYiw4QkFBYSxxQkFBQSx5QkFBQSw4QkFBQTs7O0lBV2pCLDZCQUFzRDtJQUNwRCwyQ0FLeUI7SUFDM0IsMEJBQWU7OztJQUxYLGVBQWE7SUFBYiw4QkFBYSxxQkFBQSx5QkFBQSw4QkFBQTs7O0lBV2pCLDZCQUFtRDtJQUNqRCwyQ0FLeUI7SUFDM0IsMEJBQWU7OztJQUxYLGVBQWE7SUFBYiw4QkFBYSxxQkFBQSx5QkFBQSw4QkFBQTs7O0lBakN2QixxQ0FFQztJQUNDLGtDQUEyQjtJQUN6Qiw4QkFBa0I7SUFDaEIsbUdBT2U7SUFDakIsaUJBQU07SUFDUixpQkFBVTtJQUVWLGtDQUF5QjtJQUN2Qiw4QkFBa0I7SUFDaEIsbUdBT2U7O0lBQ2pCLGlCQUFNO0lBQ1IsaUJBQVU7SUFFVixrQ0FBc0I7SUFDcEIsOEJBQWtCO0lBQ2hCLHFHQU9lOztJQUNqQixpQkFBTTtJQUNSLGlCQUFVO0lBQ1osaUJBQWdCOzs7O0lBcENvQixlQUFlO0lBQWYseUNBQWU7SUFhZixlQUFzQjtJQUF0QixrRUFBc0I7SUFhdEIsZUFBbUI7SUFBbkIsZ0VBQW1COzs7O0lBY3ZELCtCQUErRDtJQUM3RCxvQ0FLQztJQUNDLHVCQUNGO0lBQUEsaUJBQVc7SUFFWCxnQ0FBMEI7SUFBQSxtREFBbUM7SUFBQSxpQkFBTztJQUNwRSxrQ0FBOEQ7SUFBdEIscU1BQXFCO0lBQzNELHlCQUNGO0lBQUEsaUJBQVM7SUFDWCxpQkFBTTs7O0lBR0osa0NBQTBDO0lBQzFDLDZCQUE0QjtJQUFBLCtCQUFlO0lBQUEsaUJBQUk7OztJQWxCakQsK0VBY007O0lBRU4saUlBR2M7Ozs7SUFuQmEsMERBQXNCLGtCQUFBOztBRG5DbkQsTUFBTSxPQUFPLGdCQUFnQjtJQU0zQixZQUFtQixjQUE4QjtRQUE5QixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFGakQsV0FBTSxHQUFHLElBQUksT0FBTyxFQUFXLENBQUM7SUFFb0IsQ0FBQztJQUVyRCxRQUFRO1FBQ04sSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ25CLENBQUM7SUFFRCxPQUFPO1FBQ0wsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLGVBQWUsQ0FBQyxXQUFXLENBQUMsQ0FBQyxJQUFJLENBQ3hFLFVBQVUsQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFO1lBQ25CLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDckIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDdkIsT0FBTyxLQUFLLENBQUM7UUFDZixDQUFDLENBQUMsQ0FDSCxDQUFDO1FBRUYsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLGVBQWUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxJQUFJLENBQ3BFLFVBQVUsQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFO1lBQ25CLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDckIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDdkIsT0FBTyxLQUFLLENBQUM7UUFDZixDQUFDLENBQUMsQ0FDSCxDQUFDO1FBRUYsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQzlELFVBQVUsQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFO1lBQ25CLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDckIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDdkIsT0FBTyxLQUFLLENBQUM7UUFDZixDQUFDLENBQUMsQ0FDSCxDQUFDO0lBQ0osQ0FBQztJQUVELFNBQVM7UUFDUCxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDakIsQ0FBQzs7Z0ZBeENVLGdCQUFnQjtxREFBaEIsZ0JBQWdCO1FDWDdCLDhCQUF1QjtRQUNyQixzRkF5Q2dCOztRQUNsQixpQkFBTTtRQUVOLGtIQXFCYzs7O1FBaEVULGVBQTRCO1FBQTVCLDhEQUE0QixpQkFBQTs7dUZEU3BCLGdCQUFnQjtjQUw1QixTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLGNBQWM7Z0JBQ3hCLFdBQVcsRUFBRSwyQkFBMkI7Z0JBQ3hDLFNBQVMsRUFBRSxDQUFDLDBCQUEwQixDQUFDO2FBQ3hDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ3V0ZVBldFNlcnZpY2UgfSBmcm9tICcuLy4uL3NlcnZpY2VzL2N1dGUtcGV0LnNlcnZpY2UnO1xuaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEVNUFRZLCBPYnNlcnZhYmxlLCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBjYXRjaEVycm9yIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQ3V0ZVBldE1vZGVsIH0gZnJvbSAnLi4vbW9kZWxzL2N1dGUtcGV0Lm1vZGVsJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLXBldC1saXN0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL3BldC1saXN0LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vcGV0LWxpc3QuY29tcG9uZW50LmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBQZXRMaXN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgcGV0QXZhaWxhYmxlJCE6IE9ic2VydmFibGU8Q3V0ZVBldE1vZGVsW10+O1xuICBwZXRQZW5kZW50JCE6IE9ic2VydmFibGU8Q3V0ZVBldE1vZGVsW10+O1xuICBwZXRTb2xkJCE6IE9ic2VydmFibGU8Q3V0ZVBldE1vZGVsW10+O1xuICBlcnJvciQgPSBuZXcgU3ViamVjdDxib29sZWFuPigpO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBjdXRlUGV0U2VydmljZTogQ3V0ZVBldFNlcnZpY2UpIHt9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5vblJlZnJlc2goKTtcbiAgfVxuXG4gIGdldFBldHMoKTogdm9pZCB7XG4gICAgdGhpcy5wZXRBdmFpbGFibGUkID0gdGhpcy5jdXRlUGV0U2VydmljZS5nZXRQZXRzQnlTdGF0dXMoJ2F2YWlsYWJsZScpLnBpcGUoXG4gICAgICBjYXRjaEVycm9yKChlcnJvcikgPT4ge1xuICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgICAgdGhpcy5lcnJvciQubmV4dCh0cnVlKTtcbiAgICAgICAgcmV0dXJuIEVNUFRZO1xuICAgICAgfSlcbiAgICApO1xuXG4gICAgdGhpcy5wZXRQZW5kZW50JCA9IHRoaXMuY3V0ZVBldFNlcnZpY2UuZ2V0UGV0c0J5U3RhdHVzKCdwZW5kaW5nJykucGlwZShcbiAgICAgIGNhdGNoRXJyb3IoKGVycm9yKSA9PiB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgICAgICB0aGlzLmVycm9yJC5uZXh0KHRydWUpO1xuICAgICAgICByZXR1cm4gRU1QVFk7XG4gICAgICB9KVxuICAgICk7XG5cbiAgICB0aGlzLnBldFNvbGQkID0gdGhpcy5jdXRlUGV0U2VydmljZS5nZXRQZXRzQnlTdGF0dXMoJ3NvbGQnKS5waXBlKFxuICAgICAgY2F0Y2hFcnJvcigoZXJyb3IpID0+IHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgICAgIHRoaXMuZXJyb3IkLm5leHQodHJ1ZSk7XG4gICAgICAgIHJldHVybiBFTVBUWTtcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIG9uUmVmcmVzaCgpOiB2b2lkIHtcbiAgICB0aGlzLmdldFBldHMoKTtcbiAgfVxufVxuIiwiPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxuICA8bWF0LXRhYi1ncm91cFxuICAgICpuZ0lmPVwicGV0QXZhaWxhYmxlJCB8IGFzeW5jIGFzIHBldEF2YWlsYWJsZTsgZWxzZSBsb2FkaW5nRXJyb3JcIlxuICA+XG4gICAgPG1hdC10YWIgbGFiZWw9XCJBdmFpbGFibGVcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJsaXN0XCI+XG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IHBldCBvZiBwZXRBdmFpbGFibGVcIj5cbiAgICAgICAgICA8bGliLXBldC1jYXJkLW92ZXJ2aWV3XG4gICAgICAgICAgICBbaWRdPVwicGV0LmlkXCJcbiAgICAgICAgICAgIFtuYW1lXT1cInBldC5uYW1lXCJcbiAgICAgICAgICAgIFtzdGF0dXNdPVwicGV0LnN0YXR1c1wiXG4gICAgICAgICAgICBbaW1hZ2VdPVwicGV0LnBob3RvVXJsc1swXVwiXG4gICAgICAgICAgPjwvbGliLXBldC1jYXJkLW92ZXJ2aWV3PlxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgIDwvZGl2PlxuICAgIDwvbWF0LXRhYj5cblxuICAgIDxtYXQtdGFiIGxhYmVsPVwiUGVuZGluZ1wiPlxuICAgICAgPGRpdiBjbGFzcz1cImxpc3RcIj5cbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgcGV0IG9mIHBldFBlbmRlbnQkIHwgYXN5bmNcIj5cbiAgICAgICAgICA8bGliLXBldC1jYXJkLW92ZXJ2aWV3XG4gICAgICAgICAgICBbaWRdPVwicGV0LmlkXCJcbiAgICAgICAgICAgIFtuYW1lXT1cInBldC5uYW1lXCJcbiAgICAgICAgICAgIFtzdGF0dXNdPVwicGV0LnN0YXR1c1wiXG4gICAgICAgICAgICBbaW1hZ2VdPVwicGV0LnBob3RvVXJsc1swXVwiXG4gICAgICAgICAgPjwvbGliLXBldC1jYXJkLW92ZXJ2aWV3PlxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgIDwvZGl2PlxuICAgIDwvbWF0LXRhYj5cblxuICAgIDxtYXQtdGFiIGxhYmVsPVwiU29sZFwiPlxuICAgICAgPGRpdiBjbGFzcz1cImxpc3RcIj5cbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgcGV0IG9mIHBldFNvbGQkIHwgYXN5bmNcIj5cbiAgICAgICAgICA8bGliLXBldC1jYXJkLW92ZXJ2aWV3XG4gICAgICAgICAgICBbaWRdPVwicGV0LmlkXCJcbiAgICAgICAgICAgIFtuYW1lXT1cInBldC5uYW1lXCJcbiAgICAgICAgICAgIFtzdGF0dXNdPVwicGV0LnN0YXR1c1wiXG4gICAgICAgICAgICBbaW1hZ2VdPVwicGV0LnBob3RvVXJsc1swXVwiXG4gICAgICAgICAgPjwvbGliLXBldC1jYXJkLW92ZXJ2aWV3PlxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgIDwvZGl2PlxuICAgIDwvbWF0LXRhYj5cbiAgPC9tYXQtdGFiLWdyb3VwPlxuPC9kaXY+XG5cbjxuZy10ZW1wbGF0ZSAjbG9hZGluZ0Vycm9yPlxuICA8ZGl2IGNsYXNzPVwibG9hZGluZ0Vycm9yXCIgKm5nSWY9XCJlcnJvciQgfCBhc3luYzsgZWxzZSBsb2FkaW5nXCI+XG4gICAgPG1hdC1pY29uXG4gICAgICBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgYXJpYS1oaWRkZW49XCJmYWxzZVwiXG4gICAgICBhcmlhLWxhYmVsPVwiRXhhbXBsZSBob21lIGljb25cIlxuICAgICAgY2xhc3M9XCJtLWF1dG9cIlxuICAgID5cbiAgICAgIGVycm9yXG4gICAgPC9tYXQtaWNvbj5cblxuICAgIDxzcGFuIGNsYXNzPVwicGItMiBtLWF1dG9cIj5FcnJvciBsb2FkaW5nIGRhdGEuIFRyeSBhZ2FpbiBsYXRlcjwvc3Bhbj5cbiAgICA8YnV0dG9uIG1hdC1mbGF0LWJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIiAoY2xpY2spPVwib25SZWZyZXNoKClcIj5cbiAgICAgIFJlZnJlc2hcbiAgICA8L2J1dHRvbj5cbiAgPC9kaXY+XG5cbiAgPG5nLXRlbXBsYXRlICNsb2FkaW5nPlxuICAgIDxtYXQtc3Bpbm5lciBjbGFzcz1cIm0tYXV0b1wiPjwvbWF0LXNwaW5uZXI+XG4gICAgPHAgY2xhc3M9XCJwdC0yIHRleHQtY2VudGVyXCI+TG9hZGluZyBkYXRhLi4uPC9wPlxuICA8L25nLXRlbXBsYXRlPlxuPC9uZy10ZW1wbGF0ZT5cbiJdfQ==