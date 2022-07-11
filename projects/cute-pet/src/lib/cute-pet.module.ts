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
@NgModule({
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
})
export class CutePetModule {}
