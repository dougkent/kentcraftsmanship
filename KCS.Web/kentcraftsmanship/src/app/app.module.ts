import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';
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

import { NgxPageScrollModule } from 'ngx-page-scroll';

import * as fromContainers from './containers';
import * as fromServices from './services';
import * as fromComponents from './components';
//import * as fromDirectives from './directives';

@NgModule({
  declarations: [
    ...fromContainers.containers,
    ...fromComponents.components,
    // ...fromDirectives.directives,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
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
    MatInputModule,
    BrowserAnimationsModule,
    NgxPageScrollModule
  ],
  providers: [
    ...fromServices.services
  ],
  bootstrap: [fromContainers.AppComponent]
})
export class AppModule { }
