import * as i0 from '@angular/core';
import { Injectable, Component, Inject, Input, NgModule } from '@angular/core';
import * as i1 from '@angular/common/http';
import { HttpHeaders, HttpClientModule } from '@angular/common/http';
import { take, catchError } from 'rxjs/operators';
import * as i1$1 from '@angular/material/dialog';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import * as i3 from '@angular/material/button';
import { MatButtonModule } from '@angular/material/button';
import * as i2 from '@angular/forms';
import { Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import * as i5 from '@angular/material/form-field';
import { MatFormFieldModule } from '@angular/material/form-field';
import * as i6 from '@angular/material/input';
import { MatInputModule } from '@angular/material/input';
import * as i2$1 from '@angular/material/card';
import { MatCardModule } from '@angular/material/card';
import * as i3$1 from '@angular/material/chips';
import { MatChipsModule } from '@angular/material/chips';
import * as i2$2 from '@angular/common';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import * as i5$1 from '@angular/material/icon';
import { MatIconModule } from '@angular/material/icon';
import * as i3$2 from '@angular/material/tabs';
import { MatTabsModule } from '@angular/material/tabs';
import * as i7 from '@angular/material/progress-spinner';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { Subject, EMPTY } from 'rxjs';

class CutePetService {
    constructor(http) {
        this.http = http;
        this.apiURL = 'https://petstore3.swagger.io/api/v3/pet';
    }
    getPetsByStatus(status) {
        return this.http.get(`${this.apiURL}/findByStatus?status=${status}`);
    }
    getPetById(id) {
        return this.http.get(`${this.apiURL}/${id}`);
    }
    deletePet(id) {
        return this.http.delete(`${this.apiURL}/${id}`, {
            headers: new HttpHeaders().set('api_key', ''),
        });
    }
    editPet(pet) {
        return this.http.put(this.apiURL, pet);
    }
    createPet(pet) {
        return this.http.post(this.apiURL, pet).pipe(take(1));
    }
}
CutePetService.ɵfac = function CutePetService_Factory(t) { return new (t || CutePetService)(i0.ɵɵinject(i1.HttpClient)); };
CutePetService.ɵprov = i0.ɵɵdefineInjectable({ token: CutePetService, factory: CutePetService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CutePetService, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: i1.HttpClient }]; }, null); })();

class CutePetComponent {
    constructor() { }
    ngOnInit() {
    }
}
CutePetComponent.ɵfac = function CutePetComponent_Factory(t) { return new (t || CutePetComponent)(); };
CutePetComponent.ɵcmp = i0.ɵɵdefineComponent({ type: CutePetComponent, selectors: [["lib-pet-cute-pet"]], decls: 2, vars: 0, template: function CutePetComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "p");
        i0.ɵɵtext(1, " cute-pet works! ");
        i0.ɵɵelementEnd();
    } }, encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CutePetComponent, [{
        type: Component,
        args: [{
                selector: 'lib-pet-cute-pet',
                template: `
    <p>
      cute-pet works!
    </p>
  `,
                styles: []
            }]
    }], function () { return []; }, null); })();

class DeleteDialogComponent {
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
DeleteDialogComponent.ɵfac = function DeleteDialogComponent_Factory(t) { return new (t || DeleteDialogComponent)(i0.ɵɵdirectiveInject(i1$1.MatDialogRef), i0.ɵɵdirectiveInject(MAT_DIALOG_DATA), i0.ɵɵdirectiveInject(CutePetService)); };
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
    } }, directives: [i1$1.MatDialogTitle, i1$1.MatDialogActions, i3.MatButton, i1$1.MatDialogClose], styles: ["button[_ngcontent-%COMP%]{text-transform:uppercase}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DeleteDialogComponent, [{
        type: Component,
        args: [{
                selector: 'lib-pet-delete-dialog',
                templateUrl: './delete-dialog.component.html',
                styleUrls: ['./delete-dialog.component.css'],
            }]
    }], function () { return [{ type: i1$1.MatDialogRef }, { type: undefined, decorators: [{
                type: Inject,
                args: [MAT_DIALOG_DATA]
            }] }, { type: CutePetService }]; }, null); })();

class UniqueIdService {
    constructor() { }
    generateRandomId() {
        return Math.floor(Math.random() * 100);
    }
    // TO DO: implement logic to not overwrite an existent id
    checkIdExists(list, id) {
        return true;
    }
}
UniqueIdService.ɵfac = function UniqueIdService_Factory(t) { return new (t || UniqueIdService)(); };
UniqueIdService.ɵprov = i0.ɵɵdefineInjectable({ token: UniqueIdService, factory: UniqueIdService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(UniqueIdService, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], function () { return []; }, null); })();

class PetFormComponent {
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
PetFormComponent.ɵfac = function PetFormComponent_Factory(t) { return new (t || PetFormComponent)(i0.ɵɵdirectiveInject(i1$1.MatDialogRef), i0.ɵɵdirectiveInject(MAT_DIALOG_DATA), i0.ɵɵdirectiveInject(i2.FormBuilder), i0.ɵɵdirectiveInject(CutePetService), i0.ɵɵdirectiveInject(UniqueIdService)); };
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
    } }, directives: [i1$1.MatDialogTitle, i1$1.MatDialogContent, i2.ɵangular_packages_forms_forms_y, i2.NgControlStatusGroup, i2.FormGroupDirective, i5.MatFormField, i5.MatLabel, i6.MatInput, i2.DefaultValueAccessor, i2.NgControlStatus, i2.FormControlName, i2.RequiredValidator, i2.SelectControlValueAccessor, i2.NgSelectOption, i2.ɵangular_packages_forms_forms_x, i1$1.MatDialogActions, i3.MatButton], styles: ["button[_ngcontent-%COMP%]{text-transform:uppercase}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PetFormComponent, [{
        type: Component,
        args: [{
                selector: 'lib-pet-form',
                templateUrl: './pet-form.component.html',
                styleUrls: ['./pet-form.component.css'],
            }]
    }], function () { return [{ type: i1$1.MatDialogRef }, { type: undefined, decorators: [{
                type: Inject,
                args: [MAT_DIALOG_DATA]
            }] }, { type: i2.FormBuilder }, { type: CutePetService }, { type: UniqueIdService }]; }, { id: [{
            type: Input
        }] }); })();

class ModalService {
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
ModalService.ɵfac = function ModalService_Factory(t) { return new (t || ModalService)(i0.ɵɵinject(i1$1.MatDialog)); };
ModalService.ɵprov = i0.ɵɵdefineInjectable({ token: ModalService, factory: ModalService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ModalService, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: i1$1.MatDialog }]; }, null); })();

class CardOverviewComponent {
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
CardOverviewComponent.ɵfac = function CardOverviewComponent_Factory(t) { return new (t || CardOverviewComponent)(i0.ɵɵdirectiveInject(ModalService)); };
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
    } }, directives: [i2$1.MatCard, i2$1.MatCardImage, i2$1.MatCardTitle, i2$1.MatCardSubtitle, i3$1.MatChipList, i3$1.MatChip, i2$1.MatCardActions, i3.MatButton], styles: [".pet-card[_ngcontent-%COMP%]{max-width:400px}.pet-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:400px;height:400px;object-fit:cover}.mat-card-subtitle[_ngcontent-%COMP%], .mat-card-title[_ngcontent-%COMP%]{display:inline-block}.mat-card-subtitle[_ngcontent-%COMP%]{margin-bottom:0;float:right}hr[_ngcontent-%COMP%]{border:1px solid #6739b7}button[_ngcontent-%COMP%]{text-transform:uppercase}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CardOverviewComponent, [{
        type: Component,
        args: [{
                selector: 'lib-pet-card-overview',
                templateUrl: './card-overview.component.html',
                styleUrls: ['./card-overview.component.css'],
            }]
    }], function () { return [{ type: ModalService }]; }, { id: [{
            type: Input
        }], name: [{
            type: Input
        }], status: [{
            type: Input
        }], image: [{
            type: Input
        }] }); })();

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
class PetListComponent {
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
PetListComponent.ɵfac = function PetListComponent_Factory(t) { return new (t || PetListComponent)(i0.ɵɵdirectiveInject(CutePetService)); };
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
    } }, directives: [i2$2.NgIf, i3$2.MatTabGroup, i3$2.MatTab, i2$2.NgForOf, CardOverviewComponent, i5$1.MatIcon, i3.MatButton, i7.MatSpinner], pipes: [i2$2.AsyncPipe], styles: [".container[_ngcontent-%COMP%]{padding:5em}.list[_ngcontent-%COMP%]{display:flex;flex-direction:row;flex-wrap:wrap;gap:2rem;padding-block:4rem}.list[_ngcontent-%COMP%], .loadingError[_ngcontent-%COMP%]{justify-content:center}.loadingError[_ngcontent-%COMP%]{display:grid;align-items:center}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PetListComponent, [{
        type: Component,
        args: [{
                selector: 'lib-pet-list',
                templateUrl: './pet-list.component.html',
                styleUrls: ['./pet-list.component.css'],
            }]
    }], function () { return [{ type: CutePetService }]; }, null); })();

class BtnAddNewComponent {
    constructor(modalService) {
        this.modalService = modalService;
    }
    addPet() {
        this.modalService.openModal(600, PetFormComponent);
    }
}
BtnAddNewComponent.ɵfac = function BtnAddNewComponent_Factory(t) { return new (t || BtnAddNewComponent)(i0.ɵɵdirectiveInject(ModalService)); };
BtnAddNewComponent.ɵcmp = i0.ɵɵdefineComponent({ type: BtnAddNewComponent, selectors: [["lib-pet-btn-add-new"]], decls: 4, vars: 0, consts: [["mat-flat-button", "", "color", "primary", 3, "click"]], template: function BtnAddNewComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "button", 0);
        i0.ɵɵlistener("click", function BtnAddNewComponent_Template_button_click_0_listener() { return ctx.addPet(); });
        i0.ɵɵelementStart(1, "mat-icon");
        i0.ɵɵtext(2, "add");
        i0.ɵɵelementEnd();
        i0.ɵɵtext(3, " New Pet\n");
        i0.ɵɵelementEnd();
    } }, directives: [i3.MatButton, i5$1.MatIcon], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BtnAddNewComponent, [{
        type: Component,
        args: [{
                selector: 'lib-pet-btn-add-new',
                templateUrl: './btn-add-new.component.html',
                styleUrls: [],
            }]
    }], function () { return [{ type: ModalService }]; }, null); })();

const materialModules = [
    MatFormFieldModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatTabsModule,
    MatCardModule,
    MatChipsModule,
    MatDialogModule,
    MatInputModule,
    MatProgressSpinnerModule,
];
class CutePetModule {
}
CutePetModule.ɵmod = i0.ɵɵdefineNgModule({ type: CutePetModule });
CutePetModule.ɵinj = i0.ɵɵdefineInjector({ factory: function CutePetModule_Factory(t) { return new (t || CutePetModule)(); }, imports: [[
            CommonModule,
            HttpClientModule,
            BrowserModule,
            BrowserAnimationsModule,
            FormsModule,
            ReactiveFormsModule,
            ...materialModules,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(CutePetModule, { declarations: [CutePetComponent,
        CardOverviewComponent,
        PetListComponent,
        BtnAddNewComponent,
        PetFormComponent,
        DeleteDialogComponent], imports: [CommonModule,
        HttpClientModule,
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule, MatFormFieldModule,
        MatToolbarModule,
        MatButtonModule,
        MatIconModule,
        MatTabsModule,
        MatCardModule,
        MatChipsModule,
        MatDialogModule,
        MatInputModule,
        MatProgressSpinnerModule], exports: [CutePetComponent,
        CardOverviewComponent,
        PetListComponent,
        BtnAddNewComponent,
        PetFormComponent] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CutePetModule, [{
        type: NgModule,
        args: [{
                declarations: [
                    CutePetComponent,
                    CardOverviewComponent,
                    PetListComponent,
                    BtnAddNewComponent,
                    PetFormComponent,
                    DeleteDialogComponent,
                ],
                imports: [
                    CommonModule,
                    HttpClientModule,
                    BrowserModule,
                    BrowserAnimationsModule,
                    FormsModule,
                    ReactiveFormsModule,
                    ...materialModules,
                ],
                exports: [
                    CutePetComponent,
                    CardOverviewComponent,
                    PetListComponent,
                    BtnAddNewComponent,
                    PetFormComponent,
                ],
                entryComponents: [PetFormComponent],
            }]
    }], null, null); })();

/*
 * Public API Surface of cute-pet
 */

/**
 * Generated bundle index. Do not edit.
 */

export { BtnAddNewComponent, CardOverviewComponent, CutePetComponent, CutePetModule, CutePetService, DeleteDialogComponent, PetFormComponent, PetListComponent };
//# sourceMappingURL=cute-pet.js.map
