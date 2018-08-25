import { NgModule } from '@angular/core';
import {
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatGridListModule,
    MatButtonModule,
    MatTableModule,
    MatSortModule,
    MatCheckboxModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatExpansionModule,
    MatPaginatorModule,
    MatInputModule,
    MatDialogModule
  } from '@angular/material';

@NgModule({
  imports: [ 
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatGridListModule,
    MatButtonModule,
    MatTableModule,
    MatSortModule,
    MatCheckboxModule,
    MatTooltipModule,
    MatDialogModule,
    MatSnackBarModule,
    MatExpansionModule,
    MatPaginatorModule,
    MatInputModule 
  ],
  exports: [ 
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatGridListModule,
    MatButtonModule,
    MatTableModule,
    MatSortModule,
    MatCheckboxModule,
    MatTooltipModule,
    MatDialogModule,
    MatSnackBarModule,
    MatExpansionModule,
    MatPaginatorModule,
    MatInputModule 
  ]
})
export class AppMaterialModule {}