import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
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

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './kent-craftsmanship/home/home.component';
import { ContactComponent } from './kent-craftsmanship/contact/contact.component';

@NgModule({
    declarations: [
        AppComponent,
        PageNotFoundComponent,
        HomeComponent,
        ContactComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        FormsModule,
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
        AppRoutingModule,
    ],
    providers: [
    ],
    entryComponents: [
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }