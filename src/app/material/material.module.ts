import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule,
  MatToolbarModule,
  MatIconModule,
  MatListModule,
  MatCheckboxModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatInputModule,
  MatMenuModule,
  MatAutocompleteModule,
  
  MatCardModule,
  MatPaginatorModule,
  MatTableModule,
  MatGridListModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatRadioModule,
  MatSelectModule} from '@angular/material';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatCheckboxModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatMenuModule,
    MatAutocompleteModule,
    MatTableModule,
    MatPaginatorModule,
    MatGridListModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatRadioModule,
    MatSelectModule,
    MatCardModule
    
  ],
  exports: [
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatInputModule,
    MatCheckboxModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatMenuModule,
    MatAutocompleteModule,
    MatTableModule,
    MatPaginatorModule,
    MatGridListModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatCheckboxModule,
    MatRadioModule,
    MatSelectModule,
    MatCardModule
  ]
})
export class MaterialModule { }
