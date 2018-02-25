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

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { KcsService } from './services/kcs.service';
import { CurrentSectionService } from './services/current-section.service';
import { NavBarComponent } from './kent-craftsmanship/nav/nav.component';
import { HomeComponent } from './kent-craftsmanship/home/home.component';
import { AboutComponent } from './kent-craftsmanship/about/about.component';
import { PortfolioComponent } from './kent-craftsmanship/portfolio/portfolio.component';
import { MtfComponent } from './kent-craftsmanship/mtf/mtf.component';
import { ContactComponent } from './kent-craftsmanship/contact/contact.component';
import { ReCaptchaDirective } from './directives/recaptcha.directive';

@NgModule({
    declarations: [
        AppComponent,
        PageNotFoundComponent,
        NavBarComponent,
        HomeComponent,
        AboutComponent,
        PortfolioComponent,
        MtfComponent,
        ContactComponent,
        ReCaptchaDirective
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
        KcsService,
        CurrentSectionService
    ],
    entryComponents: [
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }