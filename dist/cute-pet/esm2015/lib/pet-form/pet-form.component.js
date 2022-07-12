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
        const photoURL = pet.photoUrls instanceof Array ? pet.photoUrls[0] : [pet.photoUrls];
        this.petForm.patchValue({
            id: pet.id,
            name: pet.name,
            photoUrls: photoURL,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGV0LWZvcm0uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY3V0ZS1wZXQvc3JjL2xpYi9wZXQtZm9ybS9wZXQtZm9ybS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jdXRlLXBldC9zcmMvbGliL3BldC1mb3JtL3BldC1mb3JtLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUNqRSxPQUFPLEVBQTBCLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3BFLE9BQU8sRUFBZ0IsZUFBZSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7Ozs7Ozs7OztBQVN6RSxNQUFNLE9BQU8sZ0JBQWdCO0lBTzNCLFlBQ1MsU0FBeUMsRUFDaEIsSUFBUyxFQUNqQyxFQUFlLEVBQ2YsY0FBOEIsRUFDOUIsUUFBeUI7UUFKMUIsY0FBUyxHQUFULFNBQVMsQ0FBZ0M7UUFDaEIsU0FBSSxHQUFKLElBQUksQ0FBSztRQUNqQyxPQUFFLEdBQUYsRUFBRSxDQUFhO1FBQ2YsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLGFBQVEsR0FBUixRQUFRLENBQWlCO1FBUm5DLGNBQVMsR0FBRyxLQUFLLENBQUM7SUFTZixDQUFDO0lBRUosUUFBUTs7UUFDTixVQUFJLElBQUksQ0FBQyxJQUFJLDBDQUFFLEVBQUUsRUFBRTtZQUNqQixJQUFJLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFO2dCQUM3RCxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ3ZCLENBQUMsQ0FBQyxDQUFDO1NBQ0o7UUFFRCxJQUFJLENBQUMsT0FBTyxHQUFH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V0FBVyxFQUFFLDJCQUEyQjtnQkFDeEMsU0FBUyxFQUFFLENBQUMsMEJBQTBCLENBQUM7YUFDeEM7O3NCQVVJLE1BQU07dUJBQUMsZUFBZTs2R0FOekIsRUFBRTtrQkFERCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ3V0ZVBldE1vZGVsIH0gZnJvbSAnLi8uLi9tb2RlbHMvY3V0ZS1wZXQubW9kZWwnO1xuaW1wb3J0IHsgQ3V0ZVBldFNlcnZpY2UgfSBmcm9tICcuLy4uL3NlcnZpY2VzL2N1dGUtcGV0LnNlcnZpY2UnO1xuaW1wb3J0IHsgQ29tcG9uZW50LCBJbmplY3QsIElucHV0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1CdWlsZGVyLCBGb3JtR3JvdXAsIFZhbGlkYXRvcnMgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBNYXREaWFsb2dSZWYsIE1BVF9ESUFMT0dfREFUQSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2RpYWxvZyc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBVbmlxdWVJZFNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy91bmlxdWUtaWQuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi1wZXQtZm9ybScsXG4gIHRlbXBsYXRlVXJsOiAnLi9wZXQtZm9ybS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3BldC1mb3JtLmNvbXBvbmVudC5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgUGV0Rm9ybUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHB1YmxpYyBwZXRGb3JtITogRm9ybUdyb3VwO1xuICBASW5wdXQoKVxuICBpZCE6IG51bWJlcjtcbiAgc3VibWl0dGVkID0gZmFsc2U7XG4gIHBldCQhOiBPYnNlcnZhYmxlPEN1dGVQZXRNb2RlbD47XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIGRpYWxvZ1JlZjogTWF0RGlhbG9nUmVmPFBldEZvcm1Db21wb25lbnQ+LFxuICAgIEBJbmplY3QoTUFUX0RJQUxPR19EQVRBKSBwdWJsaWMgZGF0YTogYW55LFxuICAgIHByaXZhdGUgZmI6IEZvcm1CdWlsZGVyLFxuICAgIHByaXZhdGUgY3V0ZVBldFNlcnZpY2U6IEN1dGVQZXRTZXJ2aWNlLFxuICAgIHByaXZhdGUgdW5pcXVlSWQ6IFVuaXF1ZUlkU2VydmljZVxuICApIHt9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuZGF0YT8uaWQpIHtcbiAgICAgIHRoaXMuY3V0ZVBldFNlcnZpY2UuZ2V0UGV0QnlJZCh0aGlzLmRhdGEuaWQpLnN1YnNjcmliZSgocGV0KSA9PiB7XG4gICAgICAgIHRoaXMudXBkYXRlRm9ybShwZXQpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgdGhpcy5wZXRGb3JtID0gdGhpcy5mYi5ncm91cCh7XG4gICAgICBpZDogbnVsbCxcbiAgICAgIGNhdGVnb3J5OiB0aGlzLmZiLmdyb3VwKHsgaWQ6IDEsIG5hbWU6ICdEb2dzJyB9KSxcbiAgICAgIG5hbWU6IFtudWxsLCBbVmFsaWRhdG9ycy5yZXF1aXJlZF1dLFxuICAgICAgcGhvdG9VcmxzOiBbW10sIFtWYWxpZGF0b3JzLnJlcXVpcmVkXV0sXG4gICAgICB0YWc6IHRoaXMuZmIuZ3JvdXAoeyBpZDogMSwgbmFtZTogJycgfSksXG4gICAgICBzdGF0dXM6IFtudWxsLCBbVmFsaWRhdG9ycy5yZXF1aXJlZF1dLFxuICAgIH0pO1xuICB9XG5cbiAgb25TdWJtaXQoKTogdm9pZCB7XG4gICAgdGhpcy5zdWJtaXR0ZWQgPSB0cnVlO1xuICAgIGlmICh0aGlzLnBldEZvcm0udmFsaWQpIHtcbiAgICAgIGlmICh0aGlzLnBldEZvcm0udmFsdWUuaWQpIHtcbiAgICAgICAgdGhpcy5jdXRlUGV0U2VydmljZVxuICAgICAgICAgIC5lZGl0UGV0KHRoaXMudXBkYXRlRm9ybSh0aGlzLnBldEZvcm0udmFsdWUpKVxuICAgICAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgICAgICAoc3VjY2VzcykgPT4ge1xuICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgKGVycm9yKSA9PiBjb25zb2xlLmVycm9yKGVycm9yKSxcbiAgICAgICAgICAgICgpID0+IGNvbnNvbGUubG9nKCdjb21wbGV0ZScpXG4gICAgICAgICAgKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuY3V0ZVBldFNlcnZpY2VcbiAgICAgICAgICAuY3JlYXRlUGV0KHRoaXMuZm9ybWF0UGF5bG9hZCh0aGlzLnBldEZvcm0udmFsdWUpKVxuICAgICAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgICAgICAoc3VjY2VzcykgPT4ge1xuICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgKGVycm9yKSA9PiBjb25zb2xlLmVycm9yKGVycm9yKSxcbiAgICAgICAgICAgICgpID0+IGNvbnNvbGUubG9nKCdjb21wbGV0ZScpXG4gICAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuZGlhbG9nUmVmLmNsb3NlKHRydWUpO1xuICAgICAgdGhpcy5wZXRGb3JtLnJlc2V0KCk7XG4gICAgfVxuICB9XG5cbiAgY2xvc2VNb2RhbCgpOiB2b2lkIHtcbiAgICB0aGlzLnN1Ym1pdHRlZCA9IGZhbHNlO1xuICAgIHRoaXMuZGlhbG9nUmVmLmNsb3NlKHRydWUpO1xuICAgIHRoaXMucGV0Rm9ybS5yZXNldCgpO1xuICB9XG5cbiAgZm9ybWF0UGF5bG9hZChmb3JtRGF0YTogYW55KTogYW55IHtcbiAgICBjb25zdCBwYXlsb2FkID0ge1xuICAgICAgLi4uZm9ybURhdGEsXG4gICAgICBpZDogdGhpcy51bmlxdWVJZC5nZW5lcmF0ZVJhbmRvbUlkKCksXG4gICAgICBwaG90b1VybHM6IFtmb3JtRGF0YS5waG90b1VybHNdLFxuICAgIH07XG5cbiAgICByZXR1cm4gcGF5bG9hZDtcbiAgfVxuXG4gIHVwZGF0ZUZvcm0ocGV0OiBhbnkpOiBhbnkge1xuICAgIGNvbnN0IHBob3RvVVJMID1cbiAgICAgIHBldC5waG90b1VybHMgaW5zdGFuY2VvZiBBcnJheSA/IHBldC5waG90b1VybHNbMF0gOiBbcGV0LnBob3RvVXJsc107XG5cbiAgICB0aGlzLnBldEZvcm0ucGF0Y2hWYWx1ZSh7XG4gICAgICBpZDogcGV0LmlkLFxuICAgICAgbmFtZTogcGV0Lm5hbWUsXG4gICAgICBwaG90b1VybHM6IHBob3RvVVJMLFxuICAgICAgc3RhdHVzOiBwZXQuc3RhdHVzLFxuICAgIH0pO1xuICAgIHJldHVybiB0aGlzLnBldEZvcm0udmFsdWU7XG4gIH1cbn1cbiIsIjxoMSBtYXQtZGlhbG9nLXRpdGxlPkN1dGUgcGV0IGluZm88L2gxPlxuXG48ZGl2IG1hdC1kaWFsb2ctY29udGVudD5cbiAgPGZvcm0gW2Zvcm1Hcm91cF09XCJwZXRGb3JtXCIgY2xhc3M9XCJkLWdyaWRcIj5cbiAgICA8bWF0LWZvcm0tZmllbGQgYXBwZWFyYW5jZT1cImZpbGxcIj5cbiAgICAgIDxtYXQtbGFiZWw+TmFtZTwvbWF0LWxhYmVsPlxuICAgICAgPGlucHV0IG1hdElucHV0IHBsYWNlaG9sZGVyPVwiQ3V0ZSBuYW1lXCIgdmFsdWU9XCJcIiBmb3JtQ29udHJvbE5hbWU9XCJuYW1lXCIgLz5cbiAgICA8L21hdC1mb3JtLWZpZWxkPlxuXG4gICAgPG1hdC1mb3JtLWZpZWxkIGFwcGVhcmFuY2U9XCJmaWxsXCI+XG4gICAgICA8bWF0LWxhYmVsPlBob3RvIFVSTDwvbWF0LWxhYmVsPlxuICAgICAgPGlucHV0XG4gICAgICAgIG1hdElucHV0XG4gICAgICAgIHBsYWNlaG9sZGVyPVwiRXguIGh0dHBzOi8vY2F0cGhvdG8uY29tXCJcbiAgICAgICAgdmFsdWU9XCJcIlxuICAgICAgICBmb3JtQ29udHJvbE5hbWU9XCJwaG90b1VybHNcIlxuICAgICAgICByZXF1aXJlZFxuICAgICAgLz5cbiAgICA8L21hdC1mb3JtLWZpZWxkPlxuXG4gICAgPG1hdC1mb3JtLWZpZWxkIGFwcGVhcmFuY2U9XCJmaWxsXCI+XG4gICAgICA8bWF0LWxhYmVsPlN0YXR1czwvbWF0LWxhYmVsPlxuICAgICAgPHNlbGVjdCBtYXROYXRpdmVDb250cm9sIHJlcXVpcmVkIGZvcm1Db250cm9sTmFtZT1cInN0YXR1c1wiPlxuICAgICAgICA8b3B0aW9uIHZhbHVlPVwiYXZhaWxhYmxlXCIgc2VsZWN0ZWQ+QXZhaWxhYmxlPC9vcHRpb24+XG4gICAgICAgIDxvcHRpb24gdmFsdWU9XCJwZW5kaW5nXCI+UGVuZGluZzwvb3B0aW9uPlxuICAgICAgICA8b3B0aW9uIHZhbHVlPVwic29sZFwiPlNvbGQ8L29wdGlvbj5cbiAgICAgIDwvc2VsZWN0PlxuICAgIDwvbWF0LWZvcm0tZmllbGQ+XG4gIDwvZm9ybT5cbjwvZGl2PlxuXG48ZGl2IG1hdC1kaWFsb2ctYWN0aW9ucz5cbiAgPGJ1dHRvbiBtYXQtZmxhdC1idXR0b24gY29sb3I9XCJwcmltYXJ5XCIgKGNsaWNrKT1cIm9uU3VibWl0KClcIj5BZGQ8L2J1dHRvbj5cbiAgPGJ1dHRvbiBtYXQtc3Ryb2tlZC1idXR0b24gY29sb3I9XCJwcmltYXJ5XCIgKGNsaWNrKT1cImNsb3NlTW9kYWwoKVwiPlxuICAgIENhbmNlbFxuICA8L2J1dHRvbj5cbjwvZGl2PlxuIl19