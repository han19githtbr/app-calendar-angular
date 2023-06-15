import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { MatDialog, MatDialogModule, MatDialogRef, MatDialogTitle, MAT_DIALOG_DATA } from '@angular/material/dialog';
 import { MatButtonModule } from '@angular/material/button';
 import { MatMenuModule } from '@angular/material/menu';
 import { MatIconModule } from '@angular/material/icon';
 import { MatRadioModule } from '@angular/material/radio';
 import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {A11yModule} from '@angular/cdk/a11y';
import {ClipboardModule} from '@angular/cdk/clipboard';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {PortalModule} from '@angular/cdk/portal';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {CdkStepperModule} from '@angular/cdk/stepper';
import {CdkTableModule} from '@angular/cdk/table';
import {CdkTreeModule} from '@angular/cdk/tree';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatBadgeModule} from '@angular/material/badge';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatChipsModule} from '@angular/material/chips';
import {MatStepperModule} from '@angular/material/stepper';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatDividerModule} from '@angular/material/divider';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatListModule} from '@angular/material/list';
import {MatNativeDateModule, MatRippleModule} from '@angular/material/core';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatSelectModule} from '@angular/material/select';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSliderModule} from '@angular/material/slider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSortModule} from '@angular/material/sort';
import {MatTabsModule} from '@angular/material/tabs';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatTreeModule} from '@angular/material/tree';
import { SafePipeModule } from 'safe-pipe';
import { CalendarComponent } from './calendar/calendar.component';

const dialogMock = {
  close: () => { }
};
@NgModule({
  declarations: [
    CalendarComponent,
  ],
  imports: [
    CommonModule, MatTreeModule, MatTooltipModule, MatToolbarModule, MatTabsModule, MatSortModule, MatSnackBarModule,
    BrowserModule, MatSlideToggleModule, MatSliderModule, MatSidenavModule, MatSelectModule, MatProgressSpinnerModule,
    FormsModule, MatProgressBarModule, MatPaginatorModule, MatNativeDateModule, MatRippleModule, MatListModule,
    ReactiveFormsModule, MatGridListModule, MatExpansionModule, MatDividerModule, MatDatepickerModule, MatStepperModule,
    BrowserAnimationsModule, MatChipsModule, MatCheckboxModule, MatCardModule, MatButtonToggleModule, MatBottomSheetModule,
    MatBadgeModule, MatAutocompleteModule, CdkTreeModule, CdkTableModule, CdkStepperModule, ScrollingModule,
    RouterModule, PortalModule, DragDropModule, ClipboardModule, A11yModule,
    MatButtonModule, HttpClientModule, SafePipeModule, MatSnackBarModule,
    MatMenuModule,
    MatIconModule,
    MatDialogModule,
    MatRadioModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  exports: [
    CdkStepperModule,
    MatDatepickerModule,
  ],
  providers: [
    {provide: MatDialogTitle, useValue: []},
    { provide: MAT_DIALOG_DATA, useValue: [] },
    { provide: MatDialogRef, useValue: dialogMock },

  ],
  
})
export class ComponentesModule { }
