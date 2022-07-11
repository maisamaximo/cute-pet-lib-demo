import { Component, Input } from '@angular/core';
import { DeleteDialogComponent } from '../delete-dialog/delete-dialog.component';
import { PetFormComponent } from '../pet-form/pet-form.component';
import * as i0 from "@angular/core";
import * as i1 from "./../services/modal.service";
import * as i2 from "@angular/material/card";
import * as i3 from "@angular/material/chips";
import * as i4 from "@angular/material/button";
export class CardOverviewComponent {
    constructor(modalService) {
        this.modalService = modalService;
    }
    onEdit() {
        this.modalService.openModal(600, PetFormComponent, this.id);
    }
    onDelete() {
        this.modalService.openModal(400, DeleteDialogComponent, this.id);
    }
}
CardOverviewComponent.ɵfac = function CardOverviewComponent_Factory(t) { return new (t || CardOverviewComponent)(i0.ɵɵdirectiveInject(i1.ModalService)); };
CardOverviewComponent.ɵcmp = i0.ɵɵdefineComponent({ type: CardOverviewComponent, selectors: [["lib-pet-card-overview"]], inputs: { id: "id", name: "name", status: "status", image: "image" }, decls: 15, vars: 3, consts: [["fxFlex.lt-md", "", 1, "pet-card"], ["mat-card-image", "", "alt", "Photo of a pet", 3, "src"], ["color", "tag-status"], ["aria-label", "Status selection"], ["color", "accent", "selected", ""], [1, "m-auto"], ["mat-flat-button", "", "mat-button", "", "color", "primary", 3, "click"], ["mat-stroked-button", "", "mat-button", "", "color", "primary", 3, "click"]], template: function CardOverviewComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-card", 0);
        i0.ɵɵelement(1, "img", 1);
        i0.ɵɵelementStart(2, "div");
        i0.ɵɵelementStart(3, "mat-card-title");
        i0.ɵɵtext(4);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(5, "mat-card-subtitle", 2);
        i0.ɵɵelementStart(6, "mat-chip-list", 3);
        i0.ɵɵelementStart(7, "mat-chip", 4);
        i0.ɵɵtext(8);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelement(9, "hr");
        i0.ɵɵelementStart(10, "mat-card-actions", 5);
        i0.ɵɵelementStart(11, "button", 6);
        i0.ɵɵlistener("click", function CardOverviewComponent_Template_button_click_11_listener() { return ctx.onEdit(); });
        i0.ɵɵtext(12, " Edit ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(13, "button", 7);
        i0.ɵɵlistener("click", function CardOverviewComponent_Template_button_click_13_listener() { return ctx.onDelete(); });
        i0.ɵɵtext(14, " Delete ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("src", ctx.image, i0.ɵɵsanitizeUrl);
        i0.ɵɵadvance(3);
        i0.ɵɵtextInterpolate(ctx.name);
        i0.ɵɵadvance(4);
        i0.ɵɵtextInterpolate(ctx.status);
    } }, directives: [i2.MatCard, i2.MatCardImage, i2.MatCardTitle, i2.MatCardSubtitle, i3.MatChipList, i3.MatChip, i2.MatCardActions, i4.MatButton], styles: [".pet-card[_ngcontent-%COMP%]{max-width:400px}.pet-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:400px;height:400px;object-fit:cover}.mat-card-subtitle[_ngcontent-%COMP%], .mat-card-title[_ngcontent-%COMP%]{display:inline-block}.mat-card-subtitle[_ngcontent-%COMP%]{margin-bottom:0;float:right}hr[_ngcontent-%COMP%]{border:1px solid #6739b7}button[_ngcontent-%COMP%]{text-transform:uppercase}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CardOverviewComponent, [{
        type: Component,
        args: [{
                selector: 'lib-pet-card-overview',
                templateUrl: './card-overview.component.html',
                styleUrls: ['./card-overview.component.css'],
            }]
    }], function () { return [{ type: i1.ModalService }]; }, { id: [{
            type: Input
        }], name: [{
            type: Input
        }], status: [{
            type: Input
        }], image: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC1vdmVydmlldy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jdXRlLXBldC9zcmMvbGliL2NhcmQtb3ZlcnZpZXcvY2FyZC1vdmVydmlldy5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jdXRlLXBldC9zcmMvbGliL2NhcmQtb3ZlcnZpZXcvY2FyZC1vdmVydmlldy5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNqRCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUNqRixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQzs7Ozs7O0FBT2xFLE1BQU0sT0FBTyxxQkFBcUI7SUFVaEMsWUFBb0IsWUFBMEI7UUFBMUIsaUJBQVksR0FBWixZQUFZLENBQWM7SUFBRyxDQUFDO0lBRWxELE1BQU07UUFDSixJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUUsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQzlELENBQUM7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFLHFCQUFxQixFQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNuRSxDQUFDOzswRkFsQlUscUJBQXFCOzBEQUFyQixxQkFBcUI7UUNWbEMsbUNBQXdDO1FBQ3RDLHlCQUF5RDtRQUN6RCwyQkFBSztRQUNILHNDQUFnQjtRQUFBLFlBQVU7UUFBQSxpQkFBaUI7UUFDM0MsNENBQXNDO1FBQ3BDLHdDQUE2QztRQUMzQyxtQ0FBa0M7UUFBQSxZQUFZO1FBQUEsaUJBQVc7UUFDM0QsaUJBQWdCO1FBQ2xCLGlCQUFvQjtRQUN0QixpQkFBTTtRQUNOLHFCQUFNO1FBQ04sNENBQWlDO1FBQy9CLGtDQUFzRTtRQUFuQixtR0FBUyxZQUFRLElBQUM7UUFDbkUsdUJBQ0Y7UUFBQSxpQkFBUztRQUNULGtDQUEyRTtRQUFyQixtR0FBUyxjQUFVLElBQUM7UUFDeEUseUJBQ0Y7UUFBQSxpQkFBUztRQUNYLGlCQUFtQjtRQUNyQixpQkFBVzs7UUFsQlcsZUFBYTtRQUFiLGlEQUFhO1FBRWYsZUFBVTtRQUFWLDhCQUFVO1FBR1ksZUFBWTtRQUFaLGdDQUFZOzt1RkRJekMscUJBQXFCO2NBTGpDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsdUJBQXVCO2dCQUNqQyxXQUFXLEVBQUUsZ0NBQWdDO2dCQUM3QyxTQUFTLEVBQUUsQ0FBQywrQkFBK0IsQ0FBQzthQUM3QzsrREFHUSxFQUFFO2tCQURSLEtBQUs7WUFHTixJQUFJO2tCQURILEtBQUs7WUFHTixNQUFNO2tCQURMLEtBQUs7WUFHTixLQUFLO2tCQURKLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNb2RhbFNlcnZpY2UgfSBmcm9tICcuLy4uL3NlcnZpY2VzL21vZGFsLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRGVsZXRlRGlhbG9nQ29tcG9uZW50IH0gZnJvbSAnLi4vZGVsZXRlLWRpYWxvZy9kZWxldGUtZGlhbG9nLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQZXRGb3JtQ29tcG9uZW50IH0gZnJvbSAnLi4vcGV0LWZvcm0vcGV0LWZvcm0uY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLXBldC1jYXJkLW92ZXJ2aWV3JyxcbiAgdGVtcGxhdGVVcmw6ICcuL2NhcmQtb3ZlcnZpZXcuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9jYXJkLW92ZXJ2aWV3LmNvbXBvbmVudC5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgQ2FyZE92ZXJ2aWV3Q29tcG9uZW50IHtcbiAgQElucHV0KClcbiAgcHVibGljIGlkITogbnVtYmVyO1xuICBASW5wdXQoKVxuICBuYW1lITogc3RyaW5nO1xuICBASW5wdXQoKVxuICBzdGF0dXMhOiBzdHJpbmc7XG4gIEBJbnB1dCgpXG4gIGltYWdlITogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbW9kYWxTZXJ2aWNlOiBNb2RhbFNlcnZpY2UpIHt9XG5cbiAgb25FZGl0KCk6IHZvaWQge1xuICAgIHRoaXMubW9kYWxTZXJ2aWNlLm9wZW5Nb2RhbCg2MDAsIFBldEZvcm1Db21wb25lbnQsIHRoaXMuaWQpO1xuICB9XG5cbiAgb25EZWxldGUoKTogdm9pZCB7XG4gICAgdGhpcy5tb2RhbFNlcnZpY2Uub3Blbk1vZGFsKDQwMCwgRGVsZXRlRGlhbG9nQ29tcG9uZW50LCB0aGlzLmlkKTtcbiAgfVxufVxuIiwiPG1hdC1jYXJkIGNsYXNzPVwicGV0LWNhcmRcIiBmeEZsZXgubHQtbWQ+XG4gIDxpbWcgbWF0LWNhcmQtaW1hZ2UgW3NyY109XCJpbWFnZVwiIGFsdD1cIlBob3RvIG9mIGEgcGV0XCIgLz5cbiAgPGRpdj5cbiAgICA8bWF0LWNhcmQtdGl0bGU+e3sgbmFtZSB9fTwvbWF0LWNhcmQtdGl0bGU+XG4gICAgPG1hdC1jYXJkLXN1YnRpdGxlIGNvbG9yPVwidGFnLXN0YXR1c1wiPlxuICAgICAgPG1hdC1jaGlwLWxpc3QgYXJpYS1sYWJlbD1cIlN0YXR1cyBzZWxlY3Rpb25cIj5cbiAgICAgICAgPG1hdC1jaGlwIGNvbG9yPVwiYWNjZW50XCIgc2VsZWN0ZWQ+e3sgc3RhdHVzIH19PC9tYXQtY2hpcD5cbiAgICAgIDwvbWF0LWNoaXAtbGlzdD5cbiAgICA8L21hdC1jYXJkLXN1YnRpdGxlPlxuICA8L2Rpdj5cbiAgPGhyIC8+XG4gIDxtYXQtY2FyZC1hY3Rpb25zIGNsYXNzPVwibS1hdXRvXCI+XG4gICAgPGJ1dHRvbiBtYXQtZmxhdC1idXR0b24gbWF0LWJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIiAoY2xpY2spPVwib25FZGl0KClcIj5cbiAgICAgIEVkaXRcbiAgICA8L2J1dHRvbj5cbiAgICA8YnV0dG9uIG1hdC1zdHJva2VkLWJ1dHRvbiBtYXQtYnV0dG9uIGNvbG9yPVwicHJpbWFyeVwiIChjbGljayk9XCJvbkRlbGV0ZSgpXCI+XG4gICAgICBEZWxldGVcbiAgICA8L2J1dHRvbj5cbiAgPC9tYXQtY2FyZC1hY3Rpb25zPlxuPC9tYXQtY2FyZD5cbiJdfQ==