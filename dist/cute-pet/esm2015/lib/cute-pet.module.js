import { NgModule } from '@angular/core';
import { CutePetComponent } from './cute-pet.component';
import { CardOverviewComponent } from './card-overview/card-overview.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatChipsModule } from '@angular/material/chips';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatFormFieldModule } from '@angular/material/form-field';
import { PetListComponent } from './pet-list/pet-list.component';
import { BtnAddNewComponent } from './btn-add-new/btn-add-new.component';
import { PetFormComponent } from './pet-form/pet-form.component';
import { DeleteDialogComponent } from './delete-dialog/delete-dialog.component';
import * as i0 from "@angular/core";
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
export class CutePetModule {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3V0ZS1wZXQubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvY3V0ZS1wZXQvc3JjL2xpYi9jdXRlLXBldC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUNoRixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDeEQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDMUQsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDL0UsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDN0QsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN2RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDekQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzNELE9BQU8sRUFBRSxXQUFXLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNsRSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDekQsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDOUUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDbEUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDakUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDekUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDakUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0seUNBQXlDLENBQUM7O0FBRWhGLE1BQU0sZUFBZSxHQUFHO0lBQ3RCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGFBQWE7SUFDYixhQUFhO0lBQ2IsYUFBYTtJQUNiLGNBQWM7SUFDZCxlQUFlO0lBQ2YsY0FBYztJQUNkLHdCQUF3QjtDQUN6QixDQUFDO0FBNEJGLE1BQU0sT0FBTyxhQUFhOztpREFBYixhQUFhO3lHQUFiLGFBQWEsa0JBbEJmO1lBQ1AsWUFBWTtZQUNaLGdCQUFnQjtZQUNoQixhQUFhO1lBQ2IsdUJBQXVCO1lBQ3ZCLFdBQVc7WUFDWCxtQkFBbUI7WUFDbkIsR0FBRyxlQUFlO1NBQ25CO3dGQVVVLGFBQWEsbUJBekJ0QixnQkFBZ0I7UUFDaEIscUJBQXFCO1FBQ3JCLGdCQUFnQjtRQUNoQixrQkFBa0I7UUFDbEIsZ0JBQWdCO1FBQ2hCLHFCQUFxQixhQUdyQixZQUFZO1FBQ1osZ0JBQWdCO1FBQ2hCLGFBQWE7UUFDYix1QkFBdUI7UUFDdkIsV0FBVztRQUNYLG1CQUFtQixFQTFCckIsa0JBQWtCO1FBQ2xCLGdCQUFnQjtRQUNoQixlQUFlO1FBQ2YsYUFBYTtRQUNiLGFBQWE7UUFDYixhQUFhO1FBQ2IsY0FBYztRQUNkLGVBQWU7UUFDZixjQUFjO1FBQ2Qsd0JBQXdCLGFBcUJ0QixnQkFBZ0I7UUFDaEIscUJBQXFCO1FBQ3JCLGdCQUFnQjtRQUNoQixrQkFBa0I7UUFDbEIsZ0JBQWdCO3VGQUlQLGFBQWE7Y0EzQnpCLFFBQVE7ZUFBQztnQkFDUixZQUFZLEVBQUU7b0JBQ1osZ0JBQWdCO29CQUNoQixxQkFBcUI7b0JBQ3JCLGdCQUFnQjtvQkFDaEIsa0JBQWtCO29CQUNsQixnQkFBZ0I7b0JBQ2hCLHFCQUFxQjtpQkFDdEI7Z0JBQ0QsT0FBTyxFQUFFO29CQUNQLFlBQVk7b0JBQ1osZ0JBQWdCO29CQUNoQixhQUFhO29CQUNiLHVCQUF1QjtvQkFDdkIsV0FBVztvQkFDWCxtQkFBbUI7b0JBQ25CLEdBQUcsZUFBZTtpQkFDbkI7Z0JBQ0QsT0FBTyxFQUFFO29CQUNQLGdCQUFnQjtvQkFDaEIscUJBQXFCO29CQUNyQixnQkFBZ0I7b0JBQ2hCLGtCQUFrQjtvQkFDbEIsZ0JBQWdCO2lCQUNqQjtnQkFDRCxlQUFlLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQzthQUNwQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDdXRlUGV0Q29tcG9uZW50IH0gZnJvbSAnLi9jdXRlLXBldC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ2FyZE92ZXJ2aWV3Q29tcG9uZW50IH0gZnJvbSAnLi9jYXJkLW92ZXJ2aWV3L2NhcmQtb3ZlcnZpZXcuY29tcG9uZW50JztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBIdHRwQ2xpZW50TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgTWF0Q2FyZE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NhcmQnO1xuaW1wb3J0IHsgTWF0QnV0dG9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvYnV0dG9uJztcbmltcG9ydCB7IEJyb3dzZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7IEJyb3dzZXJBbmltYXRpb25zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlci9hbmltYXRpb25zJztcbmltcG9ydCB7IE1hdFRvb2xiYXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC90b29sYmFyJztcbmltcG9ydCB7IE1hdEljb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9pY29uJztcbmltcG9ydCB7IE1hdFRhYnNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC90YWJzJztcbmltcG9ydCB7IE1hdENoaXBzTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY2hpcHMnO1xuaW1wb3J0IHsgTWF0RGlhbG9nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZGlhbG9nJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgTWF0SW5wdXRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9pbnB1dCc7XG5pbXBvcnQgeyBNYXRQcm9ncmVzc1NwaW5uZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9wcm9ncmVzcy1zcGlubmVyJztcbmltcG9ydCB7IE1hdEZvcm1GaWVsZE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2Zvcm0tZmllbGQnO1xuaW1wb3J0IHsgUGV0TGlzdENvbXBvbmVudCB9IGZyb20gJy4vcGV0LWxpc3QvcGV0LWxpc3QuY29tcG9uZW50JztcbmltcG9ydCB7IEJ0bkFkZE5ld0NvbXBvbmVudCB9IGZyb20gJy4vYnRuLWFkZC1uZXcvYnRuLWFkZC1uZXcuY29tcG9uZW50JztcbmltcG9ydCB7IFBldEZvcm1Db21wb25lbnQgfSBmcm9tICcuL3BldC1mb3JtL3BldC1mb3JtLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBEZWxldGVEaWFsb2dDb21wb25lbnQgfSBmcm9tICcuL2RlbGV0ZS1kaWFsb2cvZGVsZXRlLWRpYWxvZy5jb21wb25lbnQnO1xuXG5jb25zdCBtYXRlcmlhbE1vZHVsZXMgPSBbXG4gIE1hdEZvcm1GaWVsZE1vZHVsZSxcbiAgTWF0VG9vbGJhck1vZHVsZSxcbiAgTWF0QnV0dG9uTW9kdWxlLFxuICBNYXRJY29uTW9kdWxlLFxuICBNYXRUYWJzTW9kdWxlLFxuICBNYXRDYXJkTW9kdWxlLFxuICBNYXRDaGlwc01vZHVsZSxcbiAgTWF0RGlhbG9nTW9kdWxlLFxuICBNYXRJbnB1dE1vZHVsZSxcbiAgTWF0UHJvZ3Jlc3NTcGlubmVyTW9kdWxlLFxuXTtcbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1xuICAgIEN1dGVQZXRDb21wb25lbnQsXG4gICAgQ2FyZE92ZXJ2aWV3Q29tcG9uZW50LFxuICAgIFBldExpc3RDb21wb25lbnQsXG4gICAgQnRuQWRkTmV3Q29tcG9uZW50LFxuICAgIFBldEZvcm1Db21wb25lbnQsXG4gICAgRGVsZXRlRGlhbG9nQ29tcG9uZW50LFxuICBdLFxuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIEh0dHBDbGllbnRNb2R1bGUsXG4gICAgQnJvd3Nlck1vZHVsZSxcbiAgICBCcm93c2VyQW5pbWF0aW9uc01vZHVsZSxcbiAgICBGb3Jtc01vZHVsZSxcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuICAgIC4uLm1hdGVyaWFsTW9kdWxlcyxcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIEN1dGVQZXRDb21wb25lbnQsXG4gICAgQ2FyZE92ZXJ2aWV3Q29tcG9uZW50LFxuICAgIFBldExpc3RDb21wb25lbnQsXG4gICAgQnRuQWRkTmV3Q29tcG9uZW50LFxuICAgIFBldEZvcm1Db21wb25lbnQsXG4gIF0sXG4gIGVudHJ5Q29tcG9uZW50czogW1BldEZvcm1Db21wb25lbnRdLFxufSlcbmV4cG9ydCBjbGFzcyBDdXRlUGV0TW9kdWxlIHt9XG4iXX0=