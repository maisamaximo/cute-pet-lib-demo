import { Component } from '@angular/core';
import { PetFormComponent } from '../pet-form/pet-form.component';
import * as i0 from "@angular/core";
import * as i1 from "./../services/modal.service";
import * as i2 from "@angular/material/button";
import * as i3 from "@angular/material/icon";
export class BtnAddNewComponent {
    constructor(modalService) {
        this.modalService = modalService;
    }
    addPet() {
        this.modalService.openModal(600, PetFormComponent);
    }
}
BtnAddNewComponent.ɵfac = function BtnAddNewComponent_Factory(t) { return new (t || BtnAddNewComponent)(i0.ɵɵdirectiveInject(i1.ModalService)); };
BtnAddNewComponent.ɵcmp = i0.ɵɵdefineComponent({ type: BtnAddNewComponent, selectors: [["lib-pet-btn-add-new"]], decls: 4, vars: 0, consts: [["mat-flat-button", "", "color", "primary", 3, "click"]], template: function BtnAddNewComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "button", 0);
        i0.ɵɵlistener("click", function BtnAddNewComponent_Template_button_click_0_listener() { return ctx.addPet(); });
        i0.ɵɵelementStart(1, "mat-icon");
        i0.ɵɵtext(2, "add");
        i0.ɵɵelementEnd();
        i0.ɵɵtext(3, " New Pet\n");
        i0.ɵɵelementEnd();
    } }, directives: [i2.MatButton, i3.MatIcon], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BtnAddNewComponent, [{
        type: Component,
        args: [{
                selector: 'lib-pet-btn-add-new',
                templateUrl: './btn-add-new.component.html',
                styleUrls: [],
            }]
    }], function () { return [{ type: i1.ModalService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnRuLWFkZC1uZXcuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY3V0ZS1wZXQvc3JjL2xpYi9idG4tYWRkLW5ldy9idG4tYWRkLW5ldy5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jdXRlLXBldC9zcmMvbGliL2J0bi1hZGQtbmV3L2J0bi1hZGQtbmV3LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUMsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7Ozs7O0FBT2xFLE1BQU0sT0FBTyxrQkFBa0I7SUFDN0IsWUFBb0IsWUFBMEI7UUFBMUIsaUJBQVksR0FBWixZQUFZLENBQWM7SUFBRyxDQUFDO0lBRWxELE1BQU07UUFDSixJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztJQUNyRCxDQUFDOztvRkFMVSxrQkFBa0I7dURBQWxCLGtCQUFrQjtRQ1QvQixpQ0FBMkQ7UUFBbkIsK0ZBQVMsWUFBUSxJQUFDO1FBQ3hELGdDQUFVO1FBQUEsbUJBQUc7UUFBQSxpQkFBVztRQUFDLDBCQUMzQjtRQUFBLGlCQUFTOzt1RkRPSSxrQkFBa0I7Y0FMOUIsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxxQkFBcUI7Z0JBQy9CLFdBQVcsRUFBRSw4QkFBOEI7Z0JBQzNDLFNBQVMsRUFBRSxFQUFFO2FBQ2QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNb2RhbFNlcnZpY2UgfSBmcm9tICcuLy4uL3NlcnZpY2VzL21vZGFsLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQZXRGb3JtQ29tcG9uZW50IH0gZnJvbSAnLi4vcGV0LWZvcm0vcGV0LWZvcm0uY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLXBldC1idG4tYWRkLW5ldycsXG4gIHRlbXBsYXRlVXJsOiAnLi9idG4tYWRkLW5ldy5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogW10sXG59KVxuZXhwb3J0IGNsYXNzIEJ0bkFkZE5ld0NvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbW9kYWxTZXJ2aWNlOiBNb2RhbFNlcnZpY2UpIHt9XG5cbiAgYWRkUGV0KCk6IHZvaWQge1xuICAgIHRoaXMubW9kYWxTZXJ2aWNlLm9wZW5Nb2RhbCg2MDAsIFBldEZvcm1Db21wb25lbnQpO1xuICB9XG59XG4iLCI8YnV0dG9uIG1hdC1mbGF0LWJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIiAoY2xpY2spPVwiYWRkUGV0KClcIj5cbiAgPG1hdC1pY29uPmFkZDwvbWF0LWljb24+IE5ldyBQZXRcbjwvYnV0dG9uPlxuIl19