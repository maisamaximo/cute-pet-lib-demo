import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/dialog";
import * as i2 from "./../services/cute-pet.service";
import * as i3 from "@angular/material/button";
export class DeleteDialogComponent {
    constructor(dialogRef, data, cutePetService) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.cutePetService = cutePetService;
    }
    deletePet() {
        this.cutePetService.deletePet(this.data.id).subscribe((success) => {
            console.log('success');
        }, (error) => {
            window.location.reload();
            console.error(error);
        }, () => {
            window.location.reload();
        });
    }
}
DeleteDialogComponent.ɵfac = function DeleteDialogComponent_Factory(t) { return new (t || DeleteDialogComponent)(i0.ɵɵdirectiveInject(i1.MatDialogRef), i0.ɵɵdirectiveInject(MAT_DIALOG_DATA), i0.ɵɵdirectiveInject(i2.CutePetService)); };
DeleteDialogComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DeleteDialogComponent, selectors: [["lib-pet-delete-dialog"]], decls: 7, vars: 0, consts: [["mat-dialog-title", ""], ["mat-dialog-actions", "", "align", "center"], ["mat-flat-button", "", "color", "primary", 3, "click"], ["mat-stroked-button", "", "color", "primary", "mat-dialog-close", ""]], template: function DeleteDialogComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "h1", 0);
        i0.ɵɵtext(1, "Are you sure you want to delete this cute pet?");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(2, "div", 1);
        i0.ɵɵelementStart(3, "button", 2);
        i0.ɵɵlistener("click", function DeleteDialogComponent_Template_button_click_3_listener() { return ctx.deletePet(); });
        i0.ɵɵtext(4, "Yes");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(5, "button", 3);
        i0.ɵɵtext(6, " Cancel ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } }, directives: [i1.MatDialogTitle, i1.MatDialogActions, i3.MatButton, i1.MatDialogClose], styles: ["button[_ngcontent-%COMP%]{text-transform:uppercase}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DeleteDialogComponent, [{
        type: Component,
        args: [{
                selector: 'lib-pet-delete-dialog',
                templateUrl: './delete-dialog.component.html',
                styleUrls: ['./delete-dialog.component.css'],
            }]
    }], function () { return [{ type: i1.MatDialogRef }, { type: undefined, decorators: [{
                type: Inject,
                args: [MAT_DIALOG_DATA]
            }] }, { type: i2.CutePetService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVsZXRlLWRpYWxvZy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jdXRlLXBldC9zcmMvbGliL2RlbGV0ZS1kaWFsb2cvZGVsZXRlLWRpYWxvZy5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jdXRlLXBldC9zcmMvbGliL2RlbGV0ZS1kaWFsb2cvZGVsZXRlLWRpYWxvZy5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBUyxNQUFNLGVBQWUsQ0FBQztBQUN6RCxPQUFPLEVBQWdCLGVBQWUsRUFBRSxNQUFNLDBCQUEwQixDQUFDOzs7OztBQU96RSxNQUFNLE9BQU8scUJBQXFCO0lBQ2hDLFlBQ1MsU0FBOEMsRUFDckIsSUFBUyxFQUNqQyxjQUE4QjtRQUYvQixjQUFTLEdBQVQsU0FBUyxDQUFxQztRQUNyQixTQUFJLEdBQUosSUFBSSxDQUFLO1FBQ2pDLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtJQUNyQyxDQUFDO0lBRUosU0FBUztRQUNQLElBQUksQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsU0FBUyxDQUNuRCxDQUFDLE9BQU8sRUFBRSxFQUFFO1lBQ1YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUN6QixDQUFDLEVBQ0QsQ0FBQyxLQUFLLEVBQUUsRUFBRTtZQUNSLE1BQU0sQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUM7WUFDekIsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN2QixDQUFDLEVBQ0QsR0FBRyxFQUFFO1lBQ0gsTUFBTSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUMzQixDQUFDLENBQ0YsQ0FBQztJQUNKLENBQUM7OzBGQXBCVSxxQkFBcUIsOERBR3RCLGVBQWU7MERBSGQscUJBQXFCO1FDVGxDLDZCQUFxQjtRQUFBLDhEQUE4QztRQUFBLGlCQUFLO1FBRXhFLDhCQUF1QztRQUNyQyxpQ0FBOEQ7UUFBdEIsa0dBQVMsZUFBVyxJQUFDO1FBQUMsbUJBQUc7UUFBQSxpQkFBUztRQUMxRSxpQ0FBNEQ7UUFDMUQsd0JBQ0Y7UUFBQSxpQkFBUztRQUNYLGlCQUFNOzt1RkRFTyxxQkFBcUI7Y0FMakMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSx1QkFBdUI7Z0JBQ2pDLFdBQVcsRUFBRSxnQ0FBZ0M7Z0JBQzdDLFNBQVMsRUFBRSxDQUFDLCtCQUErQixDQUFDO2FBQzdDOztzQkFJSSxNQUFNO3VCQUFDLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDdXRlUGV0U2VydmljZSB9IGZyb20gJy4vLi4vc2VydmljZXMvY3V0ZS1wZXQuc2VydmljZSc7XG5pbXBvcnQgeyBDb21wb25lbnQsIEluamVjdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1hdERpYWxvZ1JlZiwgTUFUX0RJQUxPR19EQVRBIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZGlhbG9nJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLXBldC1kZWxldGUtZGlhbG9nJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2RlbGV0ZS1kaWFsb2cuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9kZWxldGUtZGlhbG9nLmNvbXBvbmVudC5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgRGVsZXRlRGlhbG9nQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIGRpYWxvZ1JlZjogTWF0RGlhbG9nUmVmPERlbGV0ZURpYWxvZ0NvbXBvbmVudD4sXG4gICAgQEluamVjdChNQVRfRElBTE9HX0RBVEEpIHB1YmxpYyBkYXRhOiBhbnksXG4gICAgcHJpdmF0ZSBjdXRlUGV0U2VydmljZTogQ3V0ZVBldFNlcnZpY2VcbiAgKSB7fVxuXG4gIGRlbGV0ZVBldCgpOiB2b2lkIHtcbiAgICB0aGlzLmN1dGVQZXRTZXJ2aWNlLmRlbGV0ZVBldCh0aGlzLmRhdGEuaWQpLnN1YnNjcmliZShcbiAgICAgIChzdWNjZXNzKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdzdWNjZXNzJyk7XG4gICAgICB9LFxuICAgICAgKGVycm9yKSA9PiB7XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgICB9LFxuICAgICAgKCkgPT4ge1xuICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gICAgICB9XG4gICAgKTtcbiAgfVxufVxuIiwiPGgxIG1hdC1kaWFsb2ctdGl0bGU+QXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZSB0aGlzIGN1dGUgcGV0PzwvaDE+XG5cbjxkaXYgbWF0LWRpYWxvZy1hY3Rpb25zIGFsaWduPVwiY2VudGVyXCI+XG4gIDxidXR0b24gbWF0LWZsYXQtYnV0dG9uIGNvbG9yPVwicHJpbWFyeVwiIChjbGljayk9XCJkZWxldGVQZXQoKVwiPlllczwvYnV0dG9uPlxuICA8YnV0dG9uIG1hdC1zdHJva2VkLWJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIiBtYXQtZGlhbG9nLWNsb3NlPlxuICAgIENhbmNlbFxuICA8L2J1dHRvbj5cbjwvZGl2PlxuIl19