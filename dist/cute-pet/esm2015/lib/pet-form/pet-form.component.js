import { Component, Inject, Input } from '@angular/core';
import { Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/dialog";
import * as i2 from "@angular/forms";
import * as i3 from "./../services/cute-pet.service";
import * as i4 from "../services/unique-id.service";
import * as i5 from "@angular/material/form-field";
import * as i6 from "@angular/material/input";
import * as i7 from "@angular/material/button";
export class PetFormComponent {
    constructor(dialogRef, data, fb, cutePetService, uniqueId) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.fb = fb;
        this.cutePetService = cutePetService;
        this.uniqueId = uniqueId;
        this.submitted = false;
    }
    ngOnInit() {
        var _a;
        if ((_a = this.data) === null || _a === void 0 ? void 0 : _a.id) {
            this.cutePetService.getPetById(this.data.id).subscribe((pet) => {
                this.updateForm(pet);
            });
        }
        this.petForm = this.fb.group({
            id: null,
            category: this.fb.group({ id: 1, name: 'Dogs' }),
            name: [null, [Validators.required]],
            photoUrls: [[], [Validators.required]],
            tag: this.fb.group({ id: 1, name: '' }),
            status: [null, [Validators.required]],
        });
    }
    onSubmit() {
        this.submitted = true;
        if (this.petForm.valid) {
            if (this.petForm.value.id) {
                this.cutePetService
                    .editPet(this.updateForm(this.petForm.value))
                    .subscribe((success) => {
                    window.location.reload();
                }, (error) => console.error(error), () => console.log('complete'));
            }
            else {
                this.cutePetService
                    .createPet(this.formatPayload(this.petForm.value))
                    .subscribe((success) => {
                    window.location.reload();
                }, (error) => console.error(error), () => console.log('complete'));
            }
            this.dialogRef.close(true);
            this.petForm.reset();
        }
    }
    closeModal() {
        this.submitted = false;
        this.dialogRef.close(true);
        this.petForm.reset();
    }
    formatPayload(formData) {
        const payload = Object.assign(Object.assign({}, formData), { id: this.uniqueId.generateRandomId(), photoUrls: [formData.photoUrls] });
        return payload;
    }
    updateForm(pet) {
        const petURL = pet.photoUrls[0].toString().replace(/[[\]]/g, '');
        this.petForm.patchValue({
            id: pet.id,
            name: pet.name,
            photoUrls: [petURL],
            status: pet.status,
        });
        return this.petForm.value;
    }
}
PetFormComponent.ɵfac = function PetFormComponent_Factory(t) { return new (t || PetFormComponent)(i0.ɵɵdirectiveInject(i1.MatDialogRef), i0.ɵɵdirectiveInject(MAT_DIALOG_DATA), i0.ɵɵdirectiveInject(i2.FormBuilder), i0.ɵɵdirectiveInject(i3.CutePetService), i0.ɵɵdirectiveInject(i4.UniqueIdService)); };
PetFormComponent.ɵcmp = i0.ɵɵdefineComponent({ type: PetFormComponent, selectors: [["lib-pet-form"]], inputs: { id: "id" }, decls: 27, vars: 1, consts: [["mat-dialog-title", ""], ["mat-dialog-content", ""], [1, "d-grid", 3, "formGroup"], ["appearance", "fill"], ["matInput", "", "placeholder", "Cute name", "value", "", "formControlName", "name"], ["matInput", "", "placeholder", "Ex. https://catphoto.com", "value", "", "formControlName", "photoUrls", "required", ""], ["matNativeControl", "", "required", "", "formControlName", "status"], ["value", "available", "selected", ""], ["value", "pending"], ["value", "sold"], ["mat-dialog-actions", ""], ["mat-flat-button", "", "color", "primary", 3, "click"], ["mat-stroked-button", "", "color", "primary", 3, "click"]], template: function PetFormComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "h1", 0);
        i0.ɵɵtext(1, "Cute pet info");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(2, "div", 1);
        i0.ɵɵelementStart(3, "form", 2);
        i0.ɵɵelementStart(4, "mat-form-field", 3);
        i0.ɵɵelementStart(5, "mat-label");
        i0.ɵɵtext(6, "Name");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(7, "input", 4);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(8, "mat-form-field", 3);
        i0.ɵɵelementStart(9, "mat-label");
        i0.ɵɵtext(10, "Photo URL");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(11, "input", 5);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(12, "mat-form-field", 3);
        i0.ɵɵelementStart(13, "mat-label");
        i0.ɵɵtext(14, "Status");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(15, "select", 6);
        i0.ɵɵelementStart(16, "option", 7);
        i0.ɵɵtext(17, "Available");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(18, "option", 8);
        i0.ɵɵtext(19, "Pending");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(20, "option", 9);
        i0.ɵɵtext(21, "Sold");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(22, "div", 10);
        i0.ɵɵelementStart(23, "button", 11);
        i0.ɵɵlistener("click", function PetFormComponent_Template_button_click_23_listener() { return ctx.onSubmit(); });
        i0.ɵɵtext(24, "Add");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(25, "button", 12);
        i0.ɵɵlistener("click", function PetFormComponent_Template_button_click_25_listener() { return ctx.closeModal(); });
        i0.ɵɵtext(26, " Cancel ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("formGroup", ctx.petForm);
    } }, directives: [i1.MatDialogTitle, i1.MatDialogContent, i2.ɵangular_packages_forms_forms_y, i2.NgControlStatusGroup, i2.FormGroupDirective, i5.MatFormField, i5.MatLabel, i6.MatInput, i2.DefaultValueAccessor, i2.NgControlStatus, i2.FormControlName, i2.RequiredValidator, i2.SelectControlValueAccessor, i2.NgSelectOption, i2.ɵangular_packages_forms_forms_x, i1.MatDialogActions, i7.MatButton], styles: ["button[_ngcontent-%COMP%]{text-transform:uppercase}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PetFormComponent, [{
        type: Component,
        args: [{
                selector: 'lib-pet-form',
                templateUrl: './pet-form.component.html',
                styleUrls: ['./pet-form.component.css'],
            }]
    }], function () { return [{ type: i1.MatDialogRef }, { type: undefined, decorators: [{
                type: Inject,
                args: [MAT_DIALOG_DATA]
            }] }, { type: i2.FormBuilder }, { type: i3.CutePetService }, { type: i4.UniqueIdService }]; }, { id: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGV0LWZvcm0uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY3V0ZS1wZXQvc3JjL2xpYi9wZXQtZm9ybS9wZXQtZm9ybS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jdXRlLXBldC9zcmMvbGliL3BldC1mb3JtL3BldC1mb3JtLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUNqRSxPQUFPLEVBQTBCLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3BFLE9BQU8sRUFBZ0IsZUFBZSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7Ozs7Ozs7OztBQVN6RSxNQUFNLE9BQU8sZ0JBQWdCO0lBTzNCLFlBQ1MsU0FBeUMsRUFDaEIsSUFBUyxFQUNqQyxFQUFlLEVBQ2YsY0FBOEIsRUFDOUIsUUFBeUI7UUFKMUIsY0FBUyxHQUFULFNBQVMsQ0FBZ0M7UUFDaEIsU0FBSSxHQUFKLElBQUksQ0FBSztRQUNqQyxPQUFFLEdBQUYsRUFBRSxDQUFhO1FBQ2YsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLGFBQVEsR0FBUixRQUFRLENBQWlCO1FBUm5DLGNBQVMsR0FBRyxLQUFLLENBQUM7SUFTZixDQUFDO0lBRUosUUFBUTs7UUFDTixVQUFJLElBQUksQ0FBQyxJQUFJLDBDQUFFLEVBQUUsRUFBRTtZQUNqQixJQUFJLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFO2dCQUM3RCxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ3ZCLENBQUMsQ0FBQyxDQUFDO1NBQ0o7UUFFRCxJQUFJLENBQUMsT0FBTyxHQUFH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Q3hDLFNBQVMsRUFBRSxDQUFDLDBCQUEwQixDQUFDO2FBQ3hDOztzQkFVSSxNQUFNO3VCQUFDLGVBQWU7NkdBTnpCLEVBQUU7a0JBREQsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEN1dGVQZXRNb2RlbCB9IGZyb20gJy4vLi4vbW9kZWxzL2N1dGUtcGV0Lm1vZGVsJztcbmltcG9ydCB7IEN1dGVQZXRTZXJ2aWNlIH0gZnJvbSAnLi8uLi9zZXJ2aWNlcy9jdXRlLXBldC5zZXJ2aWNlJztcbmltcG9ydCB7IENvbXBvbmVudCwgSW5qZWN0LCBJbnB1dCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtQnVpbGRlciwgRm9ybUdyb3VwLCBWYWxpZGF0b3JzIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgTWF0RGlhbG9nUmVmLCBNQVRfRElBTE9HX0RBVEEgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9kaWFsb2cnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgVW5pcXVlSWRTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvdW5pcXVlLWlkLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItcGV0LWZvcm0nLFxuICB0ZW1wbGF0ZVVybDogJy4vcGV0LWZvcm0uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9wZXQtZm9ybS5jb21wb25lbnQuY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIFBldEZvcm1Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBwdWJsaWMgcGV0Rm9ybSE6IEZvcm1Hcm91cDtcbiAgQElucHV0KClcbiAgaWQhOiBudW1iZXI7XG4gIHN1Ym1pdHRlZCA9IGZhbHNlO1xuICBwZXQkITogT2JzZXJ2YWJsZTxDdXRlUGV0TW9kZWw+O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBkaWFsb2dSZWY6IE1hdERpYWxvZ1JlZjxQZXRGb3JtQ29tcG9uZW50PixcbiAgICBASW5qZWN0KE1BVF9ESUFMT0dfREFUQSkgcHVibGljIGRhdGE6IGFueSxcbiAgICBwcml2YXRlIGZiOiBGb3JtQnVpbGRlcixcbiAgICBwcml2YXRlIGN1dGVQZXRTZXJ2aWNlOiBDdXRlUGV0U2VydmljZSxcbiAgICBwcml2YXRlIHVuaXF1ZUlkOiBVbmlxdWVJZFNlcnZpY2VcbiAgKSB7fVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmRhdGE/LmlkKSB7XG4gICAgICB0aGlzLmN1dGVQZXRTZXJ2aWNlLmdldFBldEJ5SWQodGhpcy5kYXRhLmlkKS5zdWJzY3JpYmUoKHBldCkgPT4ge1xuICAgICAgICB0aGlzLnVwZGF0ZUZvcm0ocGV0KTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHRoaXMucGV0Rm9ybSA9IHRoaXMuZmIuZ3JvdXAoe1xuICAgICAgaWQ6IG51bGwsXG4gICAgICBjYXRlZ29yeTogdGhpcy5mYi5ncm91cCh7IGlkOiAxLCBuYW1lOiAnRG9ncycgfSksXG4gICAgICBuYW1lOiBbbnVsbCwgW1ZhbGlkYXRvcnMucmVxdWlyZWRdXSxcbiAgICAgIHBob3RvVXJsczogW1tdLCBbVmFsaWRhdG9ycy5yZXF1aXJlZF1dLFxuICAgICAgdGFnOiB0aGlzLmZiLmdyb3VwKHsgaWQ6IDEsIG5hbWU6ICcnIH0pLFxuICAgICAgc3RhdHVzOiBbbnVsbCwgW1ZhbGlkYXRvcnMucmVxdWlyZWRdXSxcbiAgICB9KTtcbiAgfVxuXG4gIG9uU3VibWl0KCk6IHZvaWQge1xuICAgIHRoaXMuc3VibWl0dGVkID0gdHJ1ZTtcbiAgICBpZiAodGhpcy5wZXRGb3JtLnZhbGlkKSB7XG4gICAgICBpZiAodGhpcy5wZXRGb3JtLnZhbHVlLmlkKSB7XG4gICAgICAgIHRoaXMuY3V0ZVBldFNlcnZpY2VcbiAgICAgICAgICAuZWRpdFBldCh0aGlzLnVwZGF0ZUZvcm0odGhpcy5wZXRGb3JtLnZhbHVlKSlcbiAgICAgICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAgICAgKHN1Y2Nlc3MpID0+IHtcbiAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIChlcnJvcikgPT4gY29uc29sZS5lcnJvcihlcnJvciksXG4gICAgICAgICAgICAoKSA9PiBjb25zb2xlLmxvZygnY29tcGxldGUnKVxuICAgICAgICAgICk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmN1dGVQZXRTZXJ2aWNlXG4gICAgICAgICAgLmNyZWF0ZVBldCh0aGlzLmZvcm1hdFBheWxvYWQodGhpcy5wZXRGb3JtLnZhbHVlKSlcbiAgICAgICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAgICAgKHN1Y2Nlc3MpID0+IHtcbiAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIChlcnJvcikgPT4gY29uc29sZS5lcnJvcihlcnJvciksXG4gICAgICAgICAgICAoKSA9PiBjb25zb2xlLmxvZygnY29tcGxldGUnKVxuICAgICAgICAgICk7XG4gICAgICB9XG4gICAgICB0aGlzLmRpYWxvZ1JlZi5jbG9zZSh0cnVlKTtcbiAgICAgIHRoaXMucGV0Rm9ybS5yZXNldCgpO1xuICAgIH1cbiAgfVxuXG4gIGNsb3NlTW9kYWwoKTogdm9pZCB7XG4gICAgdGhpcy5zdWJtaXR0ZWQgPSBmYWxzZTtcbiAgICB0aGlzLmRpYWxvZ1JlZi5jbG9zZSh0cnVlKTtcbiAgICB0aGlzLnBldEZvcm0ucmVzZXQoKTtcbiAgfVxuXG4gIGZvcm1hdFBheWxvYWQoZm9ybURhdGE6IGFueSk6IGFueSB7XG4gICAgY29uc3QgcGF5bG9hZCA9IHtcbiAgICAgIC4uLmZvcm1EYXRhLFxuICAgICAgaWQ6IHRoaXMudW5pcXVlSWQuZ2VuZXJhdGVSYW5kb21JZCgpLFxuICAgICAgcGhvdG9VcmxzOiBbZm9ybURhdGEucGhvdG9VcmxzXSxcbiAgICB9O1xuXG4gICAgcmV0dXJuIHBheWxvYWQ7XG4gIH1cblxuICB1cGRhdGVGb3JtKHBldDogYW55KTogYW55IHtcbiAgICBjb25zdCBwZXRVUkwgPSBwZXQucGhvdG9VcmxzWzBdLnRvU3RyaW5nKCkucmVwbGFjZSgvW1tcXF1dL2csICcnKTtcblxuICAgIHRoaXMucGV0Rm9ybS5wYXRjaFZhbHVlKHtcbiAgICAgIGlkOiBwZXQuaWQsXG4gICAgICBuYW1lOiBwZXQubmFtZSxcbiAgICAgIHBob3RvVXJsczogW3BldFVSTF0sXG4gICAgICBzdGF0dXM6IHBldC5zdGF0dXMsXG4gICAgfSk7XG4gICAgcmV0dXJuIHRoaXMucGV0Rm9ybS52YWx1ZTtcbiAgfVxufVxuIiwiPGgxIG1hdC1kaWFsb2ctdGl0bGU+Q3V0ZSBwZXQgaW5mbzwvaDE+XG5cbjxkaXYgbWF0LWRpYWxvZy1jb250ZW50PlxuICA8Zm9ybSBbZm9ybUdyb3VwXT1cInBldEZvcm1cIiBjbGFzcz1cImQtZ3JpZFwiPlxuICAgIDxtYXQtZm9ybS1maWVsZCBhcHBlYXJhbmNlPVwiZmlsbFwiPlxuICAgICAgPG1hdC1sYWJlbD5OYW1lPC9tYXQtbGFiZWw+XG4gICAgICA8aW5wdXQgbWF0SW5wdXQgcGxhY2Vob2xkZXI9XCJDdXRlIG5hbWVcIiB2YWx1ZT1cIlwiIGZvcm1Db250cm9sTmFtZT1cIm5hbWVcIiAvPlxuICAgIDwvbWF0LWZvcm0tZmllbGQ+XG5cbiAgICA8bWF0LWZvcm0tZmllbGQgYXBwZWFyYW5jZT1cImZpbGxcIj5cbiAgICAgIDxtYXQtbGFiZWw+UGhvdG8gVVJMPC9tYXQtbGFiZWw+XG4gICAgICA8aW5wdXRcbiAgICAgICAgbWF0SW5wdXRcbiAgICAgICAgcGxhY2Vob2xkZXI9XCJFeC4gaHR0cHM6Ly9jYXRwaG90by5jb21cIlxuICAgICAgICB2YWx1ZT1cIlwiXG4gICAgICAgIGZvcm1Db250cm9sTmFtZT1cInBob3RvVXJsc1wiXG4gICAgICAgIHJlcXVpcmVkXG4gICAgICAvPlxuICAgIDwvbWF0LWZvcm0tZmllbGQ+XG5cbiAgICA8bWF0LWZvcm0tZmllbGQgYXBwZWFyYW5jZT1cImZpbGxcIj5cbiAgICAgIDxtYXQtbGFiZWw+U3RhdHVzPC9tYXQtbGFiZWw+XG4gICAgICA8c2VsZWN0IG1hdE5hdGl2ZUNvbnRyb2wgcmVxdWlyZWQgZm9ybUNvbnRyb2xOYW1lPVwic3RhdHVzXCI+XG4gICAgICAgIDxvcHRpb24gdmFsdWU9XCJhdmFpbGFibGVcIiBzZWxlY3RlZD5BdmFpbGFibGU8L29wdGlvbj5cbiAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInBlbmRpbmdcIj5QZW5kaW5nPC9vcHRpb24+XG4gICAgICAgIDxvcHRpb24gdmFsdWU9XCJzb2xkXCI+U29sZDwvb3B0aW9uPlxuICAgICAgPC9zZWxlY3Q+XG4gICAgPC9tYXQtZm9ybS1maWVsZD5cbiAgPC9mb3JtPlxuPC9kaXY+XG5cbjxkaXYgbWF0LWRpYWxvZy1hY3Rpb25zPlxuICA8YnV0dG9uIG1hdC1mbGF0LWJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIiAoY2xpY2spPVwib25TdWJtaXQoKVwiPkFkZDwvYnV0dG9uPlxuICA8YnV0dG9uIG1hdC1zdHJva2VkLWJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIiAoY2xpY2spPVwiY2xvc2VNb2RhbCgpXCI+XG4gICAgQ2FuY2VsXG4gIDwvYnV0dG9uPlxuPC9kaXY+XG4iXX0=